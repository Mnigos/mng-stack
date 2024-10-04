"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ThoughtRouter", {
    enumerable: true,
    get: function() {
        return ThoughtRouter;
    }
});
const _nestjstrpc = require("nestjs-trpc");
const _zod = require("zod");
const _server = require("@trpc/server");
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
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let ThoughtRouter = class ThoughtRouter {
    constructor(prisma){
        this.prisma = prisma;
    }
    async create(content, authorId) {
        const { id } = await this.prisma.thought.create({
            data: {
                content,
                author: {
                    connect: {
                        id: authorId
                    }
                }
            }
        });
        return this.prisma.thought.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                content: true,
                author: true,
                createdAt: true
            }
        });
    }
    edit(content, id) {
        return this.prisma.thought.update({
            where: {
                id
            },
            data: {
                content
            },
            select: {
                id: true,
                content: true,
                author: true,
                createdAt: true
            }
        });
    }
    async byId(id) {
        const foundThought = await this.prisma.thought.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                content: true,
                author: true,
                createdAt: true
            }
        });
        if (!foundThought) throw new _server.TRPCError({
            code: 'NOT_FOUND'
        });
        return foundThought;
    }
};
_ts_decorate([
    (0, _nestjstrpc.Mutation)({
        input: _thoughtschema.createThoughtSchema,
        output: _thoughtschema.thoughtSchema
    }),
    _ts_param(0, (0, _nestjstrpc.Input)('content')),
    _ts_param(1, (0, _nestjstrpc.Input)('authorId')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object,
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], ThoughtRouter.prototype, "create", null);
_ts_decorate([
    (0, _nestjstrpc.Mutation)({
        input: _thoughtschema.editThoughtSchema,
        output: _thoughtschema.thoughtSchema
    }),
    _ts_param(0, (0, _nestjstrpc.Input)('content')),
    _ts_param(1, (0, _nestjstrpc.Input)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object,
        Object
    ]),
    _ts_metadata("design:returntype", void 0)
], ThoughtRouter.prototype, "edit", null);
_ts_decorate([
    (0, _nestjstrpc.Query)({
        input: _zod.z.string(),
        output: _thoughtschema.thoughtSchema
    }),
    _ts_param(0, (0, _nestjstrpc.Input)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], ThoughtRouter.prototype, "byId", null);
ThoughtRouter = _ts_decorate([
    (0, _nestjstrpc.Router)({
        alias: 'thought'
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prisma.PrismaService === "undefined" ? Object : _prisma.PrismaService
    ])
], ThoughtRouter);

//# sourceMappingURL=thought.router.js.map