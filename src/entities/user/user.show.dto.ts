export class UserShowDto {
  public readonly name: string;
  public readonly email: string;

  constructor(params: UserShowDto) {
    this.name = params.name;
    this.email = params.email;
  }
}
