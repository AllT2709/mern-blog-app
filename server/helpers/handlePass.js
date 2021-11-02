const bcrypt = require("bcrypt");

exports.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(password, salt);
  return hasedPassword;
};

exports.comparePassword = async (formPassword, userPassword) => {
  const validate = await bcrypt.compare(formPassword, userPassword);
  return validate;
};
