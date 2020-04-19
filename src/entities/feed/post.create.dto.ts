import { Length, IsNotEmpty } from "class-validator";
import { Escape, Trim } from "@neuralegion/class-sanitizer";

export class PostCreateDto {
    @Trim()
    @Escape()
    @Length(3)
    @IsNotEmpty()
    public readonly title: string;
    @Trim()
    @Escape()
    @IsNotEmpty()
    public readonly imageUrl: string;
    @Trim()
    @Escape()
    @Length(6)
    @IsNotEmpty()
    public readonly content: string;

    constructor(params?: Partial<PostCreateDto>) {
        Object.assign(this, params);
    }
}
