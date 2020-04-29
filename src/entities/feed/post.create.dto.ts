import { Length, IsNotEmpty } from "class-validator";
import { Escape, Trim } from "@neuralegion/class-sanitizer";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class PostCreateDto {
  @Expose()
  @Trim()
  @Escape()
  @Length(3)
  @IsNotEmpty()
  title: string;

  @Expose()
  @Trim()
  @Escape()
  @IsNotEmpty()
  imageUrl: string;

  @Expose()
  @Trim()
  @Escape()
  @Length(6)
  @IsNotEmpty()
  content: string;

  @Expose()
  @IsNotEmpty()
  user: {
    id: number;
  };
}
