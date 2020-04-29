import { Exclude, Expose } from "class-transformer";

@Exclude()
export class PostSavedDto {
  @Expose()
  id: number;
}
