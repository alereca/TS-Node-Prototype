import { getFunc } from "../../utils/common/common.query.interface";
import { PostShowDto } from "../../entities/feed/post.show.dto";

export const getPostsLogicFactory = (
  getPosts: getFunc<PostShowDto>
) => () => getPosts();

