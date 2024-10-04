"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersRouter", {
    enumerable: true,
    get: function() {
        return UsersRouter;
    }
});
const _server = require("@trpc/server");
const _nestjstrpc = require("nestjs-trpc");
const _zod = require("zod");
const _userschema = require("./user.schema");
const _prisma = require("../config/prisma");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let UsersRouter = class UsersRouter {
    constructor(prisma){
        this.prisma = prisma;
    }
    async login(name) {
        const foundUser = await this.prisma.user.findUnique({
            where: {
                name
            }
        });
        if (foundUser) return foundUser;
        return this.prisma.user.create({
            data: {
                name
            }
        });
    }
    async byName(name) {
        const foundUser = await this.prisma.user.findUnique({
            where: {
                name
            }
        });
        if (!foundUser) throw new _server.TRPCError({
            code: 'NOT_FOUND'
        });
        return foundUser;
    }
};
_ts_decorate([
    (0, _nestjstrpc.Query)({
        input: _userschema.createUserSchema,
        output: _userschema.userSchema
    }),
    _ts_param(0, (0, _nestjstrpc.Input)('name')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], UsersRouter.prototype, "login", null);
_ts_decorate([
    (0, _nestjstrpc.Query)({
        input: _zod.z.string(),
        output: _userschema.userSchema
    }),
    _ts_param(0, (0, _nestjstrpc.Input)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], UsersRouter.prototype, "byName", null);
UsersRouter = _ts_decorate([
    (0, _nestjstrpc.Router)({
        alias: 'user'
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prisma.PrismaService === "undefined" ? Object : _prisma.PrismaService
    ])
], UsersRouter);

//# sourceMappingURL=user.router.js.map