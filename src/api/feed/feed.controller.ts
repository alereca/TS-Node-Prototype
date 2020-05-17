import { Request, Response, NextFunction } from "express";
import * as feedServices from "../../services/feed/post.logic.setup";
import { PostCreateDto } from "../../entities/feed/input/post.create.dto";
import { plainToClass } from "class-transformer";

export const getPosts = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  feedServices
    .getPostsLogic()
    .then((posts) => res.status(200).json(posts))
    .catch((err) => next(new Error(String(err))));
};

export const createPost = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  feedServices
    .savePostLogic(plainToClass(PostCreateDto, req.body))
    .then((savedPost) =>
      res.status(201).json({
        message: "resource created",
        post: savedPost,
      }),
    )
    .catch((err) => next(err));
};
