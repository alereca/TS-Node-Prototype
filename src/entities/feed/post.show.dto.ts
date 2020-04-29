import { UserShowDto } from "../user/user.show.dto";
import { Exclude, Expose, Type } from "class-transformer";

@Exclude()
export class PostShowDto {
  @Expose()
  title: string;
  @Expose()
  content: string;
  @Expose()
  @Type(() => UserShowDto)
  user: UserShowDto;
}
