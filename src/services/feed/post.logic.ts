import { getFunc } from "../../utils/common/common.query.interface";
import { Post } from "../../entities/feed/post.model";
import { PostShowDto } from "../../entities/feed/post.show.dto";

export const getPostsLogicFactory = (getPosts: getFunc) => async () => {
  const posts = await getPosts(Post)
  return posts.map((post) => new PostShowDto(post));
};
