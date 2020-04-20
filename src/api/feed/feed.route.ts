import { Router } from "express";
import { getPosts, createPost } from "../feed/feed.controller";
import { validateWith } from "../../middlewares/validation.middleware";
import { PostCreateDto } from "../../entities/feed/post.create.dto";
import { sanitizeWith } from "../../middlewares/sanitization.middleware";

const router = Router();

router.get("/posts", getPosts);
router.post(
  "/post",
  [sanitizeWith(PostCreateDto), validateWith(PostCreateDto, "body")],
  createPost,
);

export default router;
