"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Post = class Post {
    constructor(params) {
        this.id = 0;
        this.title = params.title;
        this.imageUrl = params.imageUrl;
        this.content = params.content;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "imageUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
Post = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Post);
exports.Post = Post;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9Qb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlFO0FBR2pFLElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7SUFhZixZQUFZLE1BQTREO1FBQ3RFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQztDQUNGLENBQUE7QUFqQkM7SUFEQyxnQ0FBc0IsRUFBRTs7Z0NBQ2Q7QUFHWDtJQURDLGdCQUFNLEVBQUU7O21DQUNLO0FBR2Q7SUFEQyxnQkFBTSxFQUFFOztzQ0FDUTtBQUdqQjtJQURDLGdCQUFNLEVBQUU7O3FDQUNPO0FBWEwsSUFBSTtJQURoQixnQkFBTSxFQUFFOztHQUNJLElBQUksQ0FtQmhCO0FBbkJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBQb3N0IHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oKVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBpbWFnZVVybDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBjb250ZW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zOiB7IHRpdGxlOiBzdHJpbmc7IGltYWdlVXJsOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9KSB7XG4gICAgdGhpcy5pZCA9IDA7XG4gICAgdGhpcy50aXRsZSA9IHBhcmFtcy50aXRsZTtcbiAgICB0aGlzLmltYWdlVXJsID0gcGFyYW1zLmltYWdlVXJsO1xuICAgIHRoaXMuY29udGVudCA9IHBhcmFtcy5jb250ZW50O1xuICB9XG59XG4iXX0=