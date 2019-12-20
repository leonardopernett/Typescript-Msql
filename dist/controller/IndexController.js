"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield database_1.connect();
        const posts = yield con.query('SELECT * FROM posts');
        return res.json(posts[0]);
    });
}
exports.getPosts = getPosts;
function savePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const con = yield database_1.connect();
        yield con.query('INSERT INTO posts SET ?', [newPost]);
        return res.json({ message: 'save post' });
    });
}
exports.savePost = savePost;
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const conn = yield database_1.connect();
        const post = yield conn.query('SELECT * FROM posts where id = ?', [id]);
        return res.json(post[0]);
    });
}
exports.getPost = getPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const conn = yield database_1.connect();
        yield conn.query('DELETE FROM posts WHERE id=?', [id]);
        return res.json({ message: 'delete posts' });
    });
}
exports.deletePost = deletePost;
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const conn = yield database_1.connect();
        yield conn.query('UPDATE posts set ? WHERE id=?', [req.body, id]);
        return res.json({ message: 'update' });
    });
}
exports.updatePost = updatePost;
