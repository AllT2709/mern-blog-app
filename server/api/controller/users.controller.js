const User = require("../../models/User");
const Post = require("../../models/Post");
const { encryptPassword } = require("../../helpers/handlePass");

exports.putUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      req.body.password = await encryptPassword(req.body.password);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.status(401).json("You can update only your account");
  }
};

exports.deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    const user = await User.findById(req.params.id);
    if (user) {
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted");
      } catch (error) {
        res.status(500).json(error.message);
      }
    }
  } else {
    res.status(401).json("You can delete only your account");
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
