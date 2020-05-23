import * as services from "../../../src/services/feed/post.logic";
import { Post } from "../../../src/entities/feed/post.model";
import { getPostMock } from "../../mocks/feed/post.mock";
import * as inputMocks from "../../mocks/feed/post.input.dto.mock";

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
    await services
      .getPostsLogicFactory(getPostsQuery)()
      .then((posts) => {
        expect(posts).toHaveLength(2);
        expect(posts[0]).not.toHaveProperty("id");
      });
  });
});

describe("Get one post", () => {
  it("should return the post that matches that id", async () => {
    const id = 1;
    const post = getPostMock();
    const getOneQuery = jest.fn().mockReturnValue(
      new Promise<Post>((resolve) => resolve(post)),
    );

    await services
      .getOnePostLogicFactory(getOneQuery)(id)
      .then((post) => expect(post).not.toHaveProperty("id"));
  });
});

describe("Save post", () => {
  it("should save post to db and return whether it was successful", async () => {
    // Arrange
    const postCreateDto = inputMocks.getPostCreateDtoMock();
    const savedPost = getPostMock();
    const savePostQuery = jest.fn().mockReturnValue(
      new Promise<Post>((resolve) => resolve(savedPost)),
    );
    // Act
    await services
      .savePostLogicFactory(savePostQuery)(postCreateDto)
      .then((savedPost) => {
        expect(savedPost.id).toBeDefined();
      });
  });
});
