"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feed_1 = __importDefault(require("./routes/feed"));
const typeorm_1 = require("typeorm");
const app = express_1.default();
typeorm_1.createConnection()
    .then(async (connection) => {
    const port = 3000;
    app.use("/feed", feed_1.default);
    app.listen(port, err => {
        console.info("server is listening");
    });
})
    .catch(error => console.error(error));
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5Qix5REFBdUM7QUFDdkMscUNBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QiwwQkFBZ0IsRUFBRTtLQUNmLElBQUksQ0FBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLEVBQUU7SUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBRWxCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQVUsQ0FBQyxDQUFDO0lBRTdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUV4QyxrQkFBZSxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGZlZWRSb3V0ZXMgZnJvbSBcIi4vcm91dGVzL2ZlZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jcmVhdGVDb25uZWN0aW9uKClcbiAgLnRoZW4oYXN5bmMgY29ubmVjdGlvbiA9PiB7XG4gICAgY29uc3QgcG9ydCA9IDMwMDA7XG5cbiAgICBhcHAudXNlKFwiL2ZlZWRcIiwgZmVlZFJvdXRlcyk7XG5cbiAgICBhcHAubGlzdGVuKHBvcnQsIGVyciA9PiB7XG4gICAgICBjb25zb2xlLmluZm8oXCJzZXJ2ZXIgaXMgbGlzdGVuaW5nXCIpO1xuICAgIH0pO1xuICB9KVxuICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXX0=