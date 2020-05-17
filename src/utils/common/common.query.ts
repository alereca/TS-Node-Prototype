import { getQueryFunc, saveQueryFunc } from "./common.query.interface";
import { getRepository } from "typeorm";
import * as Er from "../errors/errors";

export const getFromRepoQuery: getQueryFunc = <T>(
  type: {
    new (...args: any[]): T;
  },
  include: string[],
): Promise<T[]> =>
  getRepository(type)
    .find({ relations: include })
    .catch((err: Error) => {
      throw Er.DbError(err.message, err.stack);
    });

export const saveQuery: saveQueryFunc = <R, T>(
  type: {
    new (...args: any[]): T;
  },
  value: R,
): Promise<T> =>
  getRepository(type)
    .save(getRepository(type).create(value))
    .catch((err: Error) => {
      throw Er.DbError(err.message, err.stack);
    });
