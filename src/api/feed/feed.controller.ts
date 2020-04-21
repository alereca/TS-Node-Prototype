import { Request, Response, NextFunction } from "express";
import { Post } from "../../entities/feed/post.model";
import { getPostsLogic, savePostLogic } from "../../services/feed/post.logic.setup";
import { PostCreateDto } from "../../entities/feed/post.create.dto";

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<Post[]>> => {
  const posts = await getPostsLogic();

  return res.status(200).json(posts);
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<any>> => {
  const savedPost = await savePostLogic(new PostCreateDto(req.body));
  return res.status(201).json({
    message: "resource created",
    post: savedPost,
  });
};
