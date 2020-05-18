import { Router } from "express";
import * as feedActions from "../feed/feed.controller";
import { validateWith } from "../../middlewares/validation.middleware";
import { PostCreateDto } from "../../entities/feed/input/post.create.dto";
import { sanitizeWith } from "../../middlewares/sanitization.middleware";

const router = Router();

router.get("/posts", feedActions.getPosts);
router.get("/posts/:id", feedActions.getPost);
router.post(
  "/post",
  [sanitizeWith(PostCreateDto), validateWith(PostCreateDto, "body")],
  feedActions.createPost,
);

export default router;
