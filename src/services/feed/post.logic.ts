import {
  getQueryFunc,
  saveQueryFunc,
} from "../../utils/common/common.query.interface";
import { Post } from "../../entities/feed/post.model";
import { PostShowDto } from "../../entities/feed/output/post.show.dto";
import { PostCreateDto } from "../../entities/feed/input/post.create.dto";
import { PostSavedDto } from "../../entities/feed/output/post.saved.dto";
import { plainToClass } from "class-transformer";
import { TaskEither, map } from "fp-ts/lib/TaskEither";

export const getPostsLogicFactory = (
  getFromRepo: getQueryFunc,
) => (): TaskEither<Error, PostShowDto[]> =>
  map<Post[], PostShowDto[]>((posts) =>
    posts.map((post) => plainToClass(PostShowDto, post)),
  )(getFromRepo(Post, ["user"]));

export const savePostLogicFactory = (save: saveQueryFunc) => (
  value: PostCreateDto,
): Promise<PostSavedDto> =>
  save(Post, value).then((post) => plainToClass(PostSavedDto, post));
