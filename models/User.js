const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  pokemon: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
