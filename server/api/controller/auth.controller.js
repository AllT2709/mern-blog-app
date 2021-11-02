const User = require("../../models/User");
const {
  encryptPassword,
  comparePassword,
} = require("../../helpers/handlePass");

exports.registerUser = async (req, res) => {
  const data = req.body;
  try {
    let passwordHashed = await encryptPassword(data.password);
    const newUser = new User({
      username: data.username,
      email: data.email,
      password: passwordHashed,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    /* !user && res.status(400).json({ error: "wrong credentials" }); */
    if (!user) {
      return res.status(400).json({ error: "wrong credentials" });
    } else {
      const validPass = await comparePassword(req.body.password, user.password);
      if (!validPass) {
        return res.status(400).json({ error: "invalid password" });
      }
      return res.json(user);
    }

    /* const validPass = await comparePassword(req.body.password, user.password);
    !validPass && res.status(400).json({ error: "invalid password" }); */
  } catch (error) {
    res.status(500).json(error.message);
  }
};
