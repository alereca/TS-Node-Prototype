import app from "../src/server";
import request from "supertest";

describe("Get posts", () => {
  it("should get every posts in db", async () => {
    const res = await request(app)
      .get("/feed/posts");

    expect(res.status).toEqual(200);
  });
});