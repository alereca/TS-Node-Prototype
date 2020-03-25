import { Router } from "express";
import { getPosts } from "../feed/feed.controller";
import { getPostsLogic } from "../../services/feed/post.logic";


const router = Router();

router.get("/posts", getPosts(getPostsLogic));

export default router;
