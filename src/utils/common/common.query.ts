import { getQueryFunc, saveQueryFunc } from "./common.query.interface";
import { getRepository } from "typeorm";
import { TaskEither, tryCatch } from "fp-ts/lib/TaskEither";

export const getFromRepoQuery: getQueryFunc = <T>(
  type: {
    new (...args: any[]): T;
  },
  include: string[],
): TaskEither<Error, T[]> =>
  tryCatch(
    () => getRepository(type).find({ relations: include }),
    (reason) => new Error(String(reason)),
  );

export const saveQuery: saveQueryFunc = <R, T>(
  type: {
    new (...args: any[]): T;
  },
  value: R,
): Promise<T> => getRepository(type).save(getRepository(type).create(value));
