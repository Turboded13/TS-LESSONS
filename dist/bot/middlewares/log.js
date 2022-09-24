"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (ctx, next) => {
    var _a;
    console.log(ctx.updateType);
    console.log((_a = ctx.chat) === null || _a === void 0 ? void 0 : _a.id, ctx.message);
    next();
};
