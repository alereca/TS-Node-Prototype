import { UserShowDto } from "../user/user.show.dto";

export class PostShowDto {
  public readonly title: string;
  public readonly content: string;
  public readonly user: UserShowDto;

  constructor(params: PostShowDto) {
    this.title = params.title;
    this.content = params.content;
    this.user = params.user;
  }
}
