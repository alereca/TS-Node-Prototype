import { TaskEither } from "fp-ts/lib/TaskEither";

export type getQueryFunc = <T>(
  type: { new (...args: any[]): T },
  include: string[],
) => TaskEither<Error, T[]>;

export type saveQueryFunc = <R, T>(
  type: { new (...args: any[]): T },
  value: R,
) => Promise<T>;
