const Category = require("../../models/Category");

exports.createCategory = (req, res) => {
  const newCategory = new Category(req.body);
  try {
    newCategory.save();
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
