import { getFunc } from "./common.query.interface";
import { getRepository } from "typeorm";

export const getFromRepoQuery: getFunc = <T>(type: {
  new (...args: any[]): T;
}): Promise<T[]> => getRepository(type).find();
