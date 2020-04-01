import { Length, IsNotEmpty } from "class-validator";

export class PostCreateDto {
  @Length(3)
  @IsNotEmpty()
  public readonly title: string;
  @IsNotEmpty()
  public readonly imageUrl: string;
  @Length(6)
  @IsNotEmpty()
  public readonly content: string;

  constructor(params?: Partial<PostCreateDto>) {
    Object.assign(this, params);
  }
}
