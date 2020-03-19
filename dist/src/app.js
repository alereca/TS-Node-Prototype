"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
const feedRoutes = require("./Routes/feed");
app.use("/feed", feedRoutes);
app.listen(port, err => {
    if (err) {
        console.log(err);
    }
    console.log("server is listening");
});
exports.default = app;
//# sourceMappingURL=app.js.map