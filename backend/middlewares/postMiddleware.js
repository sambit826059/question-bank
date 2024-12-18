const postValidationMiddleware = (req, res, next) => {
  const { title, fileUrl, fileSize, description } = req.body;

  if (!title || !fileUrl || !fileSize || !description) {
    return res.status(400).json({ error: "Missing required fields: title, fileUrl, fileSize or description" });
  }

  if (fileSize > 5 * 1024 * 1024) {
    return res.status(400).json({ error: "File size exceeds 5 MB limit" });
  }

  next();
}

module.exports = postValidationMiddleware;
