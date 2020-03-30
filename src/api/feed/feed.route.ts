import { Router } from "express";
import { getPosts, createPost } from "../feed/feed.controller";

const router = Router();

router.get("/posts", getPosts);
router.post("/post", createPost);

export default router;
