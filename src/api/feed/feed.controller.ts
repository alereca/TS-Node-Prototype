import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../entities/feed/post.model";
import { getPostsFunc } from "../../services/feed/post.logic.interface";
import { getFunc } from "../../data/common/common.query.interface";
import { getQuery } from "../../data/common/common.query";

export const getPosts = (getPostsLogic: getPostsFunc) => async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<Array<Post>>> => {
  const posts = await getPostsLogic();

  return res.json(posts);
};
