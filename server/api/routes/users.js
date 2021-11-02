const router = require("express").Router();

const {
  putUser,
  deleteUser,
  getUser,
} = require("../controller/users.controller");

router.put("/:id", putUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);

module.exports = router;
