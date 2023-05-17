"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
mongoose_1.default.connect(process.env.MONGO_DB_URL)
    .then(() => {
    console.log("Connected..!");
    app.listen(process.env.PORT, () => {
        console.log("Server is running");
    });
}).catch((Error) => {
    console.log("Somthing wrong");
});
