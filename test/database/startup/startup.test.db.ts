import { Connection, createConnection } from "typeorm";
import { Post } from "../../../src/entities/feed/post.model";
import { User } from "../../../src/entities/user/user.model";

export const createDb = (): Promise<Connection> =>
  createConnection({
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [Post, User],
    synchronize: true,
    logging: false,
    migrations: ["test/database/migrations/**/*.ts"],
  });
