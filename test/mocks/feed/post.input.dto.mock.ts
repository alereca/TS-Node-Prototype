import { PostCreateDto } from "../../../src/entities/feed/input/post.create.dto";

const getDefaultCreateDto = (): PostCreateDto => ({
  title: "five",
  imageUrl: "five.jpg",
  content: "five content",
  user: {
    id: 1,
  },
});

export const getPostCreateDtoMock = (
  pc?: Partial<PostCreateDto>,
): PostCreateDto => ({
  ...getDefaultCreateDto(),
  ...pc,
});
