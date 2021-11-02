const router = require("express").Router();

const {
  createPost,
  putPost,
  deletePost,
  getPost,
  getAllPosts,
} = require("../controller/post.controller");

router.post("/", createPost);
router.put("/:id", putPost);
router.delete("/:id", deletePost);
router.get("/:id", getPost);
router.get("/", getAllPosts);

module.exports = router;
