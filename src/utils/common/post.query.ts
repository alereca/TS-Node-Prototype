import { getFunc } from "./common.query.interface";
import { getRepository } from "typeorm";

export const getPostsQuery: getFunc = <T>(type: { new (...args: any[]): T }) =>
  getRepository(type).find();
