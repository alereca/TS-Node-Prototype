import {
  getPostsLogicFactory,
  savePostLogicFactory,
} from "../../../src/services/feed/post.logic";
import { Post } from "../../../src/entities/feed/post.model";
import { getPostMock } from "../../mocks/feed/post.mock";
import { getPostCreateDtoMock } from "../../mocks/feed/post.create.dto.mock";

describe("get post logic", () => {
  it("should return a list of posts dtos", async () => {
    //Arrange
    const list = [
      getPostMock({
        id: 1,
      }),
      getPostMock({
        id: 2,
      }),
    ];
    const getPostsQuery = jest.fn().mockReturnValue(
      new Promise<Post[]>((resolve) => resolve(list)),
    );
    //Act
    await getPostsLogicFactory(getPostsQuery)().then((posts) => {
      expect(posts).toHaveLength(2);
      expect(posts[0]).not.toHaveProperty("id");
    });
  });
});

describe("Save post", () => {
  it("should save post to db and return whether it was successful", async () => {
    // Arrange
    const postCreateDto = getPostCreateDtoMock();
    const postToSave = getPostMock();
    const savePostQuery = jest.fn().mockReturnValue(
      new Promise<Post>((resolve) => resolve(postToSave)),
    );
    // Act
    await savePostLogicFactory(savePostQuery)(postCreateDto).then((savedPost) => {
      expect(savedPost).toBeDefined();
      expect(savedPost).not.toHaveProperty("id");
    });
  });
});
