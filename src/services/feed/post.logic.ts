import {
  getQueryFunc,
  saveQueryFunc,
} from "../../utils/common/common.query.interface";
import { Post } from "../../entities/feed/post.model";
import { PostShowDto } from "../../entities/feed/output/post.show.dto";
import { PostCreateDto } from "../../entities/feed/input/post.create.dto";
import { PostSavedDto } from "../../entities/feed/output/post.saved.dto";
import { plainToClass } from "class-transformer";
import * as TE from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/pipeable";

const convertToDto = (posts: Post[]): TE.TaskEither<Error, PostShowDto[]> =>
  TE.right(posts.map((post) => plainToClass(PostShowDto, post)));

export const getPostsLogicFactory = (
  getFromRepo: getQueryFunc,
) => (): TE.TaskEither<Error, PostShowDto[]> =>
  pipe(getFromRepo(Post, ["user"]), TE.chain(convertToDto));

export const savePostLogicFactory = (save: saveQueryFunc) => (
  value: PostCreateDto,
): Promise<PostSavedDto> =>
  save(Post, value).then((post) => plainToClass(PostSavedDto, post));
