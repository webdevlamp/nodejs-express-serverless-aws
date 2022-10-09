const express = require("express");
const { router } = require("..");

const routes = express.Router({
  mergeParams: true
});

routes.get("/", (req, res) => {
  res.status(200).json({"name": "Mayur", "email": "mayur.bhatt@gmail.com"});
});

module.exports = {
  routes
}