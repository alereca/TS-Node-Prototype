import { Router } from "express";
import { getPosts, createPost } from "../feed/feed.controller";
import { validateWith } from "../../middlewares/validation.middleware";
import { createPostDtaSchema } from "../../validation/post.schemas";

const router = Router();

router.get("/posts", getPosts);
router.post("/post", [validateWith(createPostDtaSchema, "body")], createPost);

export default router;
