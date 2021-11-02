const router = require("express").Router();

const {
  createCategory,
  getCategories,
} = require("../controller/categories.controller");

router.post("/", createCategory);
router.get("/", getCategories);
/*router.put("/:id", putPost);
router.delete("/:id", deletePost);
router.get("/:id", getPost);
 */

module.exports = router;
