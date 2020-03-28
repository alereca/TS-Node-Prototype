import { getFunc, ObjectType } from "./common.query.interface";
import { getRepository } from "typeorm";

export const getQuery: getFunc = <T>(type: ObjectType<T>) =>
  getRepository<T>(type).find();
