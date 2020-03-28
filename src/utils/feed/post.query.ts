import { getFunc } from "../common/common.query.interface";
import { Post } from "../../entities/feed/post.model";
import { getRepository } from "typeorm";

export const getPostsQuery: getFunc<Post> = () => getRepository(Post).find();