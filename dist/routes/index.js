"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IndexController_1 = require("../controller/IndexController");
const router = express_1.Router();
router.route('/posts')
    .get(IndexController_1.getPosts)
    .post(IndexController_1.savePost);
router.route('/posts/:id')
    .get(IndexController_1.getPost)
    .delete(IndexController_1.deletePost)
    .put(IndexController_1.updatePost);
exports.default = router;
