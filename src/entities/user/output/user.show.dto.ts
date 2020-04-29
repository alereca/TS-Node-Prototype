import { Exclude, Expose } from "class-transformer";

@Exclude()
export class UserShowDto {
  @Expose()
  name: string;
  @Expose()
  email: string;
}
