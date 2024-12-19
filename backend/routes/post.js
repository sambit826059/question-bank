const express = require("express");
const z = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { PrismaClient } = require("@prisma/client");
const { authMiddleware } = require("../middlewares/authMiddleware");
const postValidationMiddleware = require("../middlewares/postMiddleware");
const r2Service = require("../services/r2service");
const r2 = require("../services/r2service");

const router = express.Router();
const prisma = new PrismaClient();

const postUploadBody = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(10).max(500),
  fileUrl: z.string().url(),
  fileSize: z.number().positive(),
  fileType: z.string().optional(),
});

router.use(authMiddleware);

router.get("/posts", async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: {
        authorId: req.userid,
      },
      include: {
        author: {
          select: {
            email: true,
            firstName: true,
            lastName: true,
          }
        }
      }
    });
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the posts" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(req.params.id)
      },
      include: {
        author: {
          select: {
            email: true,
            firstName: true,
            lastName: true,
          }
        }
      }
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" })
    }

    // getting file from the r2 
    const fileData = await r2Service.getFile(post.fileUrl);
    post.fileUrl = fileData.body;

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

router.post("/", async (req, res) => {
  try {
    const validatedData = await postUploadBody.parseAsync(req.body);

    // Generate key
    const fileKey = `user-${req.userid}/posts/${Date.now()}-${validatedData.title}`;

    // upload to r2 
    const uploadResult = await r2Service.uploadFile(fileKey, req.body.fileUrl);

    // to create a new post in db
    const post = await prisma.post.create({
      data: {
        ...validatedData,
        fileUrl: fileKey,
        authorId: req.userid,
      }
    });

    res.status(201).json(post);
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ message: error.issues });
    }
    res.status(500).json({ error: "Failed to create post" });
  }
});

router.put("/post/:id", async (req, res) => {
  try {
    const { title, fileSize, fileUrl, fileType, description } = await postUploadBody.parseAsync(
      req.body
    );

    // to update post in db
    const post = await prisma.post.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        title,
        fileUrl,
        fileSize,
        fileType,
        description,
      },
    });

    res.status(201).json(post);
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ message: error.issues });
    }
    res.status(500).json({ message: error.message });
  }
})

router.delete("/post/:id", async (req, res) => {
  try {
    const post = await prisma.post.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });

    if (!post) {
      return res.status(404).json({ error: "Posts not found" });
    }

    if (post.authorId !== req.userid) {
      return res.status(403).json({ error: "Not authorized to delete this post" })
    }

    // delete from db
    await prisma.post.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });

    // delete from r2 
    await r2Service.deleteFile(post.fileUrl);

    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete post" });
  }
});

module.exports = router;
