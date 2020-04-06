export type getFunc = <T>(type: {new (...args: any[]): T}) => Promise<Array<T>>;
