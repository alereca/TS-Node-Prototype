import { getFunc } from "../../data/common/common.query.interface";
import { Post } from "../../entities/feed/post.model";
import { getPostsFunc } from "./post.logic.interface";
import { getQuery } from "../../data/common/common.query";

export const getPostsLogicFactory = (
  getPosts: getFunc<Post>
):getPostsFunc => () => getPosts();

export const getPostsLogic = getPostsLogicFactory(getQuery);
