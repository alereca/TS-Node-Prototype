import {getFunc} from "./common.query.interface"
import { getRepository } from "typeorm";
import { Post } from "../../entities/feed/post.model";

export const getQuery: getFunc<Post> = () => getRepository(Post).find();