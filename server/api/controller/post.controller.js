const Post = require("../../models/Post");

exports.createPost = (req, res) => {
  const newPost = new Post(req.body);
  try {
    newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.putPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else {
      res.status(401).json({ message: "you cant update only your post" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("post has been deleted");
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else {
      res.status(401).json({ message: "you cant delete only your post" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getAllPosts = async (req, res) => {
  const { username, category } = req.query;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({ categories: { $in: [category] } });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
