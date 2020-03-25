import { Post } from "../../entities/feed/post.model";
import { getFunc } from "../../data/common/common.query.interface";

export type getPostsFunc = () => Promise<Array<Post>>