"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _vitestmockextended = require("vitest-mock-extended");
const _thoughtrouter = require("./thought.router");
const _prisma = require("../../config/prisma");
describe('ThoughtRouter', ()=>{
    const id = 'id';
    const content = 'content';
    const authorId = 'authorId';
    const thoughtMock = (0, _vitestmockextended.mock)({
        id,
        content,
        authorId
    });
    const thoughtWithAuthorMock = (0, _vitestmockextended.mock)({
        id,
        content: content,
        author: {
            id: authorId
        }
    });
    let moduleRef;
    let thoughtRouter;
    let prisma;
    let thoughtFindUniqueSpy;
    beforeAll(async ()=>{
        moduleRef = await _testing.Test.createTestingModule({
            providers: [
                _thoughtrouter.ThoughtRouter,
                {
                    provide: _prisma.PrismaService,
                    useValue: {
                        thought: {
                            create: vi.fn(),
                            findUnique: vi.fn(),
                            update: vi.fn()
                        }
                    }
                }
            ]
        }).compile();
        thoughtRouter = moduleRef.get(_thoughtrouter.ThoughtRouter);
        prisma = moduleRef.get(_prisma.PrismaService);
        thoughtFindUniqueSpy = vi.spyOn(prisma.thought, 'findUnique');
    });
    afterAll(async ()=>{
        await moduleRef.close();
    });
    test('should be defined', ()=>{
        expect(thoughtRouter).toBeDefined();
    });
    describe('create', ()=>{
        test('should create', async ()=>{
            const thoughtCreateSpy = vi.spyOn(prisma.thought, 'create').mockResolvedValue(thoughtMock);
            thoughtFindUniqueSpy.mockResolvedValue(thoughtWithAuthorMock);
            expect(await thoughtRouter.create(content, authorId)).toEqual(thoughtWithAuthorMock);
            expect(thoughtCreateSpy).toHaveBeenCalledWith({
                data: {
                    content,
                    author: {
                        connect: {
                            id: authorId
                        }
                    }
                }
            });
            expect(thoughtFindUniqueSpy).toHaveBeenCalledWith({
                where: {
                    id
                },
                select: expect.anything()
            });
        });
    });
    describe('edit', ()=>{
        test('should edit', async ()=>{
            const thoughtUpdateSpy = vi.spyOn(prisma.thought, 'update').mockResolvedValue(thoughtWithAuthorMock);
            expect(await thoughtRouter.edit(content, id)).toEqual(thoughtWithAuthorMock);
            expect(thoughtUpdateSpy).toHaveBeenCalledWith({
                where: {
                    id
                },
                data: {
                    content
                },
                select: expect.anything()
            });
        });
    });
    describe('byId', ()=>{
        test('should return found thought', async ()=>{
            thoughtFindUniqueSpy.mockResolvedValue(thoughtMock);
            expect(await thoughtRouter.byId(id)).toEqual(thoughtMock);
            expect(thoughtFindUniqueSpy).toHaveBeenCalledWith({
                where: {
                    id
                },
                select: expect.anything()
            });
        });
        test('should throw not found error', async ()=>{
            thoughtFindUniqueSpy.mockResolvedValue(null);
            await expect(thoughtRouter.byId(id)).rejects.toThrowError('NOT_FOUND');
            expect(thoughtFindUniqueSpy).toHaveBeenCalledWith({
                where: {
                    id
                },
                select: expect.anything()
            });
        });
    });
});

//# sourceMappingURL=thought.router.spec.js.map