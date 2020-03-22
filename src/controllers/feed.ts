import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entities/Post";

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<Array<Post>>> => {
  const posts = await getRepository(Post).find();

  return res.json(posts);
};
