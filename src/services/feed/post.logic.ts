import { getFunc } from "../../utils/common/common.query.interface";
import { Post } from "../../entities/feed/post.model";

export const getPostsLogicFactory = (
  getPosts: getFunc
) => () => getPosts(Post);

