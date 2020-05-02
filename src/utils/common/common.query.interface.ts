import { Result } from "neverthrow";

export type getQueryFunc = <T>(
  type: { new (...args: any[]): T },
  include: string[],
) => Promise<Result<T[], Error>>;

export type saveQueryFunc = <R, T>(
  type: { new (...args: any[]): T },
  value: R,
) => Promise<T>;
