import { User } from "../../../src/entities/user/user.model";

const getDefaultUser = (): User => ({
  id: 1,
  name: "default",
  email: "default@example.com",
  password: "default",
  status: "default",
  posts: [],
});

export const getUserMock = (u?: Partial<User>): User => ({
  ...getDefaultUser(),
  ...u,
});
