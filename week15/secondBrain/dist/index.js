"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const content_routes_1 = require("./routes/content.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = Number(process.env.PORT);
// console.log(port);
app.use('/api/v1', content_routes_1.contentRouter);
app.use('/api/v1', user_routes_1.default);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(`${process.env.MONGO_URI}`);
        console.log(`the app is connected to ${process.env.MONGO_URI}`);
    }
    catch (error) {
        console.log(`something went wrong while connecting to the server ${error}`);
    }
});
app.listen(port, () => {
    main();
    console.log(`the app is running at http://localhost:${port}`);
});
