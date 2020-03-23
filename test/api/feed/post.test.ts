import app from "../../../src/server";
import request from "supertest";
import { createConnection, getConnection } from "typeorm";
import { Post } from "../../../src/entities/feed/post.model";

const createDb = () =>
  createConnection({
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [Post],
    synchronize: true,
    logging: true,
    migrations: ["test/migrations/**/*.ts"]
  });

beforeEach(async () => {
  var connection = await createDb();
  await connection.runMigrations();
});

describe("Get posts", () => {
  it("should get every posts in db", async () => {
    const res = await request(app).get("/feed/posts");

    expect(res.status).toEqual(200);
    expect(res.body).toHaveLength(3);
  });
});

afterEach(() => {
  return getConnection().close();
});
