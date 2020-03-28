import { Request, Response, NextFunction } from "express";
import { Post } from "../../entities/feed/post.model";
import { getPostsLogic } from "../../services/feed/post.logic.setup";


export const getPosts = async (
  req: Request,
  res: Response): Promise<Response<Array<Post>>> => {
  const posts = await getPostsLogic();

  return res.json(posts);
};
