"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _vitestmockextended = require("vitest-mock-extended");
const _thoughtsrouter = require("./thoughts.router");
const _prisma = require("../../config/prisma");
describe('ThoughtsRouter', ()=>{
    let moduleRef;
    let thoughtsRouter;
    let prisma;
    beforeAll(async ()=>{
        moduleRef = await _testing.Test.createTestingModule({
            providers: [
                _thoughtsrouter.ThoughtsRouter,
                {
                    provide: _prisma.PrismaService,
                    useValue: {
                        thought: {
                            findMany: vi.fn()
                        }
                    }
                }
            ]
        }).compile();
        thoughtsRouter = moduleRef.get(_thoughtsrouter.ThoughtsRouter);
        prisma = moduleRef.get(_prisma.PrismaService);
    });
    afterAll(async ()=>{
        await moduleRef.close();
    });
    test('should be defined', ()=>{
        expect(thoughtsRouter).toBeDefined();
    });
    describe('all', ()=>{
        test('should return all thoughts', async ()=>{
            const thoughtMock = (0, _vitestmockextended.mock)({
                id: 'id',
                content: 'content',
                author: {
                    id: 'authorId'
                },
                createdAt: new Date()
            });
            const thoughtFindManySpy = vi.spyOn(prisma.thought, 'findMany').mockResolvedValue([
                thoughtMock
            ]);
            expect(await thoughtsRouter.all()).toEqual([
                thoughtMock
            ]);
            expect(thoughtFindManySpy).toHaveBeenCalled();
        });
    });
});

//# sourceMappingURL=thoughts.router.spec.js.map