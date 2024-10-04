"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ThoughtsRouter", {
    enumerable: true,
    get: function() {
        return ThoughtsRouter;
    }
});
const _nestjstrpc = require("nestjs-trpc");
const _zod = require("zod");
const _thoughtschema = require("../thought.schema");
const _prisma = require("../../config/prisma");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let ThoughtsRouter = class ThoughtsRouter {
    constructor(prisma){
        this.prisma = prisma;
    }
    all() {
        return this.prisma.thought.findMany({
            select: {
                id: true,
                content: true,
                author: true,
                createdAt: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
    }
};
_ts_decorate([
    (0, _nestjstrpc.Query)({
        output: _zod.z.array(_thoughtschema.thoughtSchema)
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], ThoughtsRouter.prototype, "all", null);
ThoughtsRouter = _ts_decorate([
    (0, _nestjstrpc.Router)({
        alias: 'thoughts'
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prisma.PrismaService === "undefined" ? Object : _prisma.PrismaService
    ])
], ThoughtsRouter);

//# sourceMappingURL=thoughts.router.js.map