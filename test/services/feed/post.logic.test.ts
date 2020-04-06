import { getPostsLogicFactory } from "../../../src/services/feed/post.logic";
import { Post } from "../../../src/entities/feed/post.model";
import {} from "ts-jest"

describe("get post logic", () => {
  it("should return a list of posts dtos", async () => {
    //Arrange
    const list = [
      Post.Create({
        id: 1,
        title: "test",
        imageUrl: "test.jpg",
        content: "test content",
      }),
      Post.Create({
        id: 2,
        title: "test2",
        imageUrl: "test2.jpg",
        content: "test2 content",
      }),
    ];
    const getPostsQuery = jest.fn().mockReturnValue(
      new Promise<Post[]>((resolve) => resolve(list))
    );
    //Act
    await getPostsLogicFactory(getPostsQuery)().then((posts) => {
      expect(posts).toHaveLength(2);
    });
  });
});

/* describe("Save post", () => {
  it("should save post to db and return whether it was successful", async () => {
    const savePostQuery = (post: PostCreateDto):void => {};
    await savePostLogicFactory(savePostQuery)();
  });
});  */
