export class PostShowDto {
  public readonly id: number;
  public readonly title: string;
  public readonly imageUrl: string;
  public readonly content: string;

  constructor(params: {
    id: number;
    title: string;
    imageUrl: string;
    content: string;
  }) {
    this.id = params.id;
    this.title = params.title;
    this.imageUrl = params.imageUrl;
    this.content = params.content;
  }
}
