const express = require("express");
const CategoryController = require("../controllers/category");
const middlewares_authenticated = require("../middlewares/authenticated")
const multiparty = require("connect-multiparty");

const md_upload = multiparty({ uploadDir: "./uploads/categories" });
const api = express.Router();

api.post(
    "/new",
    [middlewares_authenticated.asureAuth, md_upload],
    CategoryController.createCategory
);
api.get("/", CategoryController.getCategories);

module.exports = api;
