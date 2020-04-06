export class PostShowDto {
  public readonly title: string;
  public readonly content: string;

  constructor(params?: Partial<PostShowDto>) {
    Object.assign(this, params);
  }
}
