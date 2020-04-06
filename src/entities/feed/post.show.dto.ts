export class PostShowDto {
  public readonly title: string;
  public readonly content: string;

  constructor(params: PostShowDto) {
    this.title = params.title;
    this.content = params.content;
  }
}
