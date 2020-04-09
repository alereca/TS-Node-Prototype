import { getFunc } from "../../utils/common/common.query.interface";
import { Post } from "../../entities/feed/post.model";
import { PostShowDto } from "../../entities/feed/post.show.dto";

export const getPostsLogicFactory = (getFromRepo: getFunc) =>(): Promise<
  PostShowDto[] 
> =>
  getFromRepo(Post).then((posts) => posts.map((post) => new PostShowDto(post)));
