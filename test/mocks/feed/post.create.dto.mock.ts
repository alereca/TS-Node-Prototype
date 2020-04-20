import { PostCreateDto } from "../../../src/entities/feed/post.create.dto";

const getDefault = (): PostCreateDto => ({
  title: "four",
  imageUrl: "four.jpg",
  content: "four content",
});

export const getPostCreateDtoMock = (pc?: Partial<PostCreateDto>): PostCreateDto => ({
  ...getDefault(),
  ...pc,
});
