import app from "../../../src/server";
import request from "supertest";
import { getConnection } from "typeorm";
import { getPostCreateDtoMock } from "../../mocks/feed/post.create.dto.mock";
import { createDb } from "../../database/startup/startup.test.db";

beforeEach(async () => {
  const connection = await createDb();
  await connection.runMigrations();
});

afterEach(() => {
  return getConnection().close();
});

describe("Get posts", () => {
  it("should get every posts in db", () => {
    return request(app)
      .get("/feed/posts")
      .then((res) => {
        expect(res.status).toEqual(200);
        expect(res.body).toHaveLength(3);
      });
  });
});

describe("Get one post", () => {
  it("should return the post that has that id", () => {
    const id = 1;
    return request(app)
      .get(`/feed/posts/${id}`)
      .then((res) => {
        expect(res.status).toEqual(200);
        expect(res.body.title).toEqual("one");
        expect(res.body.user.name).toEqual("someone");
      });
  });

  it("should return not found if id didn't match with any post", () => {
    const id = 5;
    return request(app)
      .get(`/feed/posts/${id}`)
      .then((res) => {
        expect(res.status).toEqual(404);
        expect(res.body.message).toEqual(`Item ${id} not found`);
      });
  });
});

describe("Create post", () => {
  it("should save the resource and return a successful message including the saved objects", () => {
    return request(app)
      .post("/feed/post")
      .send(getPostCreateDtoMock())
      .then((res) => {
        expect(res.status).toEqual(201);
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("resource created");
        expect(res.body.post.id).toBeDefined();
        expect(res.body.post.imageUrl).not.toBeDefined();
      });
  });

  it("should return a validation error if some input in the request body is invalid", () => {
    return request(app)
      .post("/feed/post")
      .send(
        getPostCreateDtoMock({
          title: "fo",
          content: "four                   ",
          imageUrl: "<s></s>",
        }),
      )
      .then((res) => {
        expect(res.status).toEqual(400);
        expect(res.body.status).toEqual("failed");
        expect(res.body.error).toHaveProperty("original");
        expect(res.body.error.details).toHaveLength(2);
      });
  });
});
