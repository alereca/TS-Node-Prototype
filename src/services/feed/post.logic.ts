import * as queryTypes from "../../utils/common/common.query.interface";
import { Post } from "../../entities/feed/post.model";
import { PostShowDto } from "../../entities/feed/output/post.show.dto";
import { PostCreateDto } from "../../entities/feed/input/post.create.dto";
import { PostSavedDto } from "../../entities/feed/output/post.saved.dto";
import { plainToClass } from "class-transformer";

export const getPostsLogicFactory = (
  getFromRepo: queryTypes.getQueryFunc,
) => (): Promise<PostShowDto[]> =>
  getFromRepo(Post, ["user"]).then((posts) =>
    posts.map((post) => plainToClass(PostShowDto, post)),
  );

export const getPostLogicFactory = (
  getOneFromRepo: queryTypes.getOneQueryFunc,
) => (id: number): Promise<PostShowDto> =>
  getOneFromRepo(Post, ["user"], id).then((post) =>
    plainToClass(PostShowDto, post),
  );

export const savePostLogicFactory = (save: queryTypes.saveQueryFunc) => (
  value: PostCreateDto,
): Promise<PostSavedDto> =>
  save(Post, value).then((post) => plainToClass(PostSavedDto, post));
