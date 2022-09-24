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
const telegraf_1 = require("telegraf");
const start_1 = __importDefault(require("../bot/handlers/start"));
const log_1 = __importDefault(require("../bot/middlewares/log"));
const shop_1 = __importDefault(require("../bot/handlers/shop"));
class Bot {
    constructor(token) {
        this.launch = () => __awaiter(this, void 0, void 0, function* () { return this.bot.launch().then(() => { var _a; return console.log(`Bot @${(_a = this.bot.botInfo) === null || _a === void 0 ? void 0 : _a.username} lauched`); }); });
        this.bot = new telegraf_1.Telegraf(token);
        this.bot.use(log_1.default);
        this.bot.use(shop_1.default);
        this.bot.start(start_1.default);
    }
}
exports.default = Bot;
