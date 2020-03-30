export class PostCreateDto {
  public readonly title: string;
  public readonly imageUrl: string;
  public readonly content: string;

  constructor(params: { title: string; imageUrl: string; content: string }) {
    this.title = params.title;
    this.imageUrl = params.imageUrl;
    this.content = params.content;
  }
}