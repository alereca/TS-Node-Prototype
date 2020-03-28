export type ObjectType<T> = {new(): T} | Function;

export type getFunc = <T>(
  type: ObjectType<T>
) => Promise<Array<T>>;
