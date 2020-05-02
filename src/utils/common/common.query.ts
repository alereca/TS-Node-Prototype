import { getQueryFunc, saveQueryFunc } from "./common.query.interface";
import { getRepository } from "typeorm";
import { Result, ok, err } from "neverthrow";

export const getFromRepoQuery: getQueryFunc = async <T>(
  type: {
    new (...args: any[]): T;
  },
  include: string[],
): Promise<Result<T[], Error>> => {
  try {
    return ok(await getRepository(type).find({ relations: include }));
  } catch (error) {
    return err(new Error(error));
  }
};

export const saveQuery: saveQueryFunc = <R, T>(
  type: {
    new (...args: any[]): T;
  },
  value: R,
): Promise<T> => getRepository(type).save(getRepository(type).create(value));
