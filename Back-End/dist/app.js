"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
mongoose_1.default.connect("mongodb+srv://nipuna:1234@test01.kxnbmvm.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
    console.log("Connected..!");
    app.listen(5000, () => {
        console.log("Server is running");
    });
}).catch((Error) => {
    console.log("Somthing wrong");
});
