import { getPostsLogicFactory } from "../../../src/services/feed/post.logic";
import { getFunc } from "../../../src/utils/common/common.query.interface";
import { PostShowDto } from "../../../src/entities/feed/post.show.dto";

describe("get post logic", () => {
  it("should return a list of posts dtos", async () => {
    //Arrange
    const list = [
      new PostShowDto({
        id: 1,
        title: "test",
        imageUrl: "test.jpg",
        content: "test content"
      })
    ];
    const getPostsQuery: getFunc = () =>
      new Promise(resolve => resolve(list));
    //Act
    const result = await getPostsLogicFactory(getPostsQuery)();
    //Assert
    expect(result).toHaveLength(1);
  });
});
