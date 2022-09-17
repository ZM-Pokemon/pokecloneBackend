const User = require("../models/User");

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    res.json(user);
  } catch (err) {
    console.log("error");
  }
}

module.exports = {
  signup,
};
