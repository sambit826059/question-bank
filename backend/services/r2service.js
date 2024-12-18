require("dotenv").config();
const { R2 } = require("@cloudflare/workers-types");

const r2Service = {
  async uploadFile(key, fileData) {
    try {
      await process.env.MY_BUCKET.put(key, fileData);
      return `Uploaded ${key} successfully`;
    } catch (error) {
      throw new Error(`Failed to upload file: ${error.message}`);
    }
  },

  async getFile(key) {
    try {
      const object = await process.env.MY_BUCKET.get(key);
      if (object === null) {
        return { status: 404, message: "Object not found" };
      }

      const headers = {
        "Content-Type": object.httpMetadata?.contentType || "application/octet-stream",
        "etag": object.httpEtag,
      };

      return {
        status: 200,
        body: object.body,
        headers,
      };
    } catch (error) {
      throw new Error(`Failed to get file: ${error.message}`);
    }
  },

  async deleteFile(key) {
    try {
      await process.env.MY_BUCKET.delete(key);
      return `Deleted ${key}`;
    } catch (error) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  },

  async handleRequest(request) {
    const url = new URL(request.url);
    const key = url.pathname.slice(1);

    try {
      switch (request.method) {
        case "PUT":
          const uploadMessage = await this.uploadFile(key, request.body);
          return new Response(uploadMessage, { status: 200 });

        case "GET":
          const { status, message, body, headers } = await this.getFile(key);
          if (status === 404) {
            return new Response(message, { status });
          }
          return new Response(body, { status, headers });

        case "DELETE":
          const deleteMessage = await this.deleteFile(key);
          return new Response(deleteMessage, { status: 200 });

        default:
          return new Response("Method Not Allowed", {
            status: 405,
            headers: { Allow: "PUT, GET, DELETE" },
          });
      }
    } catch (error) {
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  },
};

module.exports = r2Service;
