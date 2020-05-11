import { getQueryFunc, saveQueryFunc } from "./common.query.interface";
import { getRepository } from "typeorm";
import { DbError } from "../errors/errors";

export const getFromRepoQuery: getQueryFunc = <T>(
  type: {
    new (...args: any[]): T;
  },
  include: string[],
): Promise<T[]> => getRepository(type).find({ relations: include });

export const saveQuery: saveQueryFunc = <R, T>(
  type: {
    new (...args: any[]): T;
  },
  value: R,
): Promise<T> =>
  getRepository(type)
    .save(getRepository(type).create(value))
    .catch((err: Error) => {
      throw DbError(err.message, err.stack);
    });
