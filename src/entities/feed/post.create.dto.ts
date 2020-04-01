import {Length} from "class-validator"
import { InputDto } from "../input.dto";

export class PostCreateDto extends InputDto{
  @Length(3)
  public readonly title: string;
  public readonly imageUrl: string;
  @Length(6)
  public readonly content: string;

  constructor(params: { title: string; imageUrl: string; content: string }) {
    super();
    this.title = params.title;
    this.imageUrl = params.imageUrl;
    this.content = params.content;
  }
}