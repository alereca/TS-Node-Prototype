import { Request, Response, NextFunction } from "express";
import { Post } from "../../entities/feed/post.model";
import { getPostsLogic, savePostLogic } from "../../services/feed/post.logic.setup";
import { PostCreateDto } from "../../entities/feed/input/post.create.dto";
import { plainToClass } from "class-transformer";
import { PostShowDto } from "src/entities/feed/output/post.show.dto";
import { PostSavedDto } from "src/entities/feed/output/post.saved.dto";

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<PostShowDto[]>> => {
  const posts = await getPostsLogic();

  return res.status(200).json(posts);
};

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
