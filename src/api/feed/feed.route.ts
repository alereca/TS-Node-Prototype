import { Router } from "express";
import { getPosts } from "../feed/feed.controller";


const router = Router();

router.get("/posts", getPosts);

export default router;
