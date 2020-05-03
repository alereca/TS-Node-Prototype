import { Request, Response, NextFunction } from "express";
import {
  getPostsLogic,
  savePostLogic,
} from "../../services/feed/post.logic.setup";
import { PostCreateDto } from "../../entities/feed/input/post.create.dto";
import { plainToClass } from "class-transformer";
import { PostSavedDto } from "src/entities/feed/output/post.saved.dto";

export const getPosts = (req: Request, res: Response, next: NextFunction) =>
  getPostsLogic().then((result) => {
    result
      .map((posts) => res.status(200).json(posts))
      .mapErr((err) => next(err));
  });

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<PostSavedDto>> => {
  const savedPost = await savePostLogic(plainToClass(PostCreateDto, req.body));
  return res.status(201).json({
    message: "resource created",
    post: savedPost,
  });
};
