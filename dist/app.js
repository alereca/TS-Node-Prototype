"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feed_1 = __importDefault(require("./routes/feed"));
const typeorm_1 = require("typeorm");
const app = express_1.default();
typeorm_1.createConnection();
const port = 3000;
app.use("/feed", feed_1.default);
app.listen(port, err => {
    if (err) {
        console.log(err);
    }
    console.log("server is listening");
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5Qix5REFBdUM7QUFDdkMscUNBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QiwwQkFBZ0IsRUFBRSxDQUFDO0FBQ25CLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUVsQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxjQUFVLENBQUMsQ0FBQztBQUU3QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtJQUNyQixJQUFJLEdBQUcsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEI7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGZlZWRSb3V0ZXMgZnJvbSBcIi4vcm91dGVzL2ZlZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jcmVhdGVDb25uZWN0aW9uKCk7XG5jb25zdCBwb3J0ID0gMzAwMDtcblxuYXBwLnVzZShcIi9mZWVkXCIsIGZlZWRSb3V0ZXMpO1xuXG5hcHAubGlzdGVuKHBvcnQsIGVyciA9PiB7XG4gIGlmIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG4gIGNvbnNvbGUubG9nKFwic2VydmVyIGlzIGxpc3RlbmluZ1wiKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXX0=