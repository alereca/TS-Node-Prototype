import { getQueryFunc, saveQueryFunc } from "../../utils/common/common.query.interface";
import { Post } from "../../entities/feed/post.model";
import { PostShowDto } from "../../entities/feed/post.show.dto";
import { PostCreateDto } from "../../entities/feed/post.create.dto";

export const getPostsLogicFactory = (getFromRepo: getQueryFunc) => (): Promise<
  PostShowDto[]
> =>
  getFromRepo(Post, ["user"]).then((posts) => posts.map((post) => new PostShowDto(post)));

export const savePostLogicFactory = (save: saveQueryFunc) => (
  value: PostCreateDto,
): Promise<PostShowDto> => save(Post, value).then((post) => new PostShowDto(post));
