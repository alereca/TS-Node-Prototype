import {
  getPostsLogicFactory,
  savePostLogicFactory,
} from "../../../src/services/feed/post.logic";
import { Post } from "../../../src/entities/feed/post.model";
import { getPostMock } from "../../mocks/feed/post.mock";
import { getPostCreateDtoMock } from "../../mocks/feed/post.create.dto.mock";
import { Result, ok } from "neverthrow";

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
      new Promise<Result<Post[], Error>>((resolve, reject) =>
        resolve(ok(list)),
      ),
    );
    //Act
    await getPostsLogicFactory(getPostsQuery)().then((result) => {
      result.map((posts) => {
        expect(posts).toHaveLength(2);
        expect(posts[0]).not.toHaveProperty("id");
      });
    });
  });
});

describe("Save post", () => {
  it("should save post to db and return whether it was successful", async () => {
    // Arrange
    const postCreateDto = getPostCreateDtoMock();
    const savedPost = getPostMock();
    const savePostQuery = jest.fn().mockReturnValue(
      new Promise<Post>((resolve) => resolve(savedPost)),
    );
    // Act
    await savePostLogicFactory(savePostQuery)(postCreateDto).then(
      (savedPost) => {
        expect(savedPost.id).toBeDefined();
      },
    );
  });
});
