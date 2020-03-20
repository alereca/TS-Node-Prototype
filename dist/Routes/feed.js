"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feed_1 = require("../Controllers/feed");
const router = express_1.Router();
router.get("/posts", feed_1.getPosts);
module.exports = router;
//# sourceMappingURL=feed.js.map