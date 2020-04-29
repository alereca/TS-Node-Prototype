import { Post } from "../../../src/entities/feed/post.model";
import { getUserMock } from "../user/user.mock";

const getDefault = (): Post => ({
  id: 1,
  title: "test",
  imageUrl: "test.jpg",
  content: "test content",
  user: getUserMock(),
});

export const getPostMock = (p?: Partial<Post>): Post => ({
  ...getDefault(),
  ...p,
});
