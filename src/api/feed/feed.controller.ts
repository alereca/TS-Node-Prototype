import { Request, Response, NextFunction } from "express";
import { Post } from "../../entities/feed/post.model";
import { getPostsLogic } from "../../services/feed/post.logic.setup";
import { PostShowDto } from "../../entities/feed/post.show.dto";

export const getPosts = async (
  req: Request,
  res: Response
): Promise<Response<Post[]>> => {
  const posts = await getPostsLogic();

  return res.status(200).json(posts);
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  return res.status(201).json({
    message: "resource created",
    post: new PostShowDto({
      title: "four",
      content: "four content"
    })
  });
};
