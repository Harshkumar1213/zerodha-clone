const {model} = require("mongoose");

const {UserSchema} = require('../schemas/usersSchema');

const UsersModel = new model("User", UserSchema);
module.exports = {UsersModel};