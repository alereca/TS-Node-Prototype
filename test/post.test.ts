import app from "../src/server";
import request from "supertest";
import { createConnection, getConnection } from "typeorm";
import { Post } from "../src/entities/Post";

beforeEach(() => {
  return createConnection({
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [Post],
    synchronize: true,
    logging: true
  });
});

describe("Get posts", () => {
  it("should get every posts in db", async () => {
    const res = await request(app).get("/feed/posts");

    expect(res.status).toEqual(200);
  });
});

afterEach(() => {
  return getConnection().close();
});
