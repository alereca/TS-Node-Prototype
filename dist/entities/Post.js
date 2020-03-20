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
    typeorm_1.Entity()
], Post);
exports.Post = Post;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9Qb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlFO0FBR2pFLElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7Q0FZaEIsQ0FBQTtBQVZHO0lBREMsZ0NBQXNCLEVBQUU7O2dDQUNkO0FBR1g7SUFEQyxnQkFBTSxFQUFFOzttQ0FDSztBQUdkO0lBREMsZ0JBQU0sRUFBRTs7c0NBQ1E7QUFHakI7SUFEQyxnQkFBTSxFQUFFOztxQ0FDTztBQVhQLElBQUk7SUFEaEIsZ0JBQU0sRUFBRTtHQUNJLElBQUksQ0FZaEI7QUFaWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgQ29sdW1uLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgUG9zdHtcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gICAgaWQ6IG51bWJlcjtcblxuICAgIEBDb2x1bW4oKVxuICAgIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICBpbWFnZVVybDogc3RyaW5nO1xuICAgIFxuICAgIEBDb2x1bW4oKVxuICAgIGNvbnRlbnQ6IHN0cmluZztcbn0iXX0=