import { PostCreateDto } from "../../../src/entities/feed/post.create.dto";

const getDefault = (): PostCreateDto => ({
  title: "five",
  imageUrl: "five.jpg",
  content: "five content",
  user: {
    id: 1,
  },
});

export const getPostCreateDtoMock = (pc?: Partial<PostCreateDto>): PostCreateDto => ({
  ...getDefault(),
  ...pc,
});
