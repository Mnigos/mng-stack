"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _vitestmockextended = require("vitest-mock-extended");
const _userrouter = require("./user.router");
const _prisma = require("../config/prisma");
describe('UserRouter', ()=>{
    const name = 'test';
    const userMock = (0, _vitestmockextended.mock)({
        name
    });
    let moduleReference;
    let usersRouter;
    let prisma;
    let userFindUniqueSpy;
    beforeAll(async ()=>{
        moduleReference = await _testing.Test.createTestingModule({
            providers: [
                _userrouter.UsersRouter,
                {
                    provide: _prisma.PrismaService,
                    useValue: {
                        user: {
                            create: vi.fn(),
                            findUnique: vi.fn()
                        }
                    }
                }
            ]
        }).compile();
        usersRouter = moduleReference.get(_userrouter.UsersRouter);
        prisma = moduleReference.get(_prisma.PrismaService);
        userFindUniqueSpy = vi.spyOn(prisma.user, 'findUnique');
    });
    afterAll(async ()=>{
        await moduleReference.close();
    });
    test('should be defined', ()=>{
        expect(usersRouter).toBeDefined();
    });
    describe('login', ()=>{
        let userCreateSpy;
        beforeEach(()=>{
            userCreateSpy = vi.spyOn(prisma.user, 'create');
        });
        test('should return found user', async ()=>{
            userFindUniqueSpy.mockResolvedValue(userMock);
            expect(await usersRouter.login(name)).toEqual(userMock);
            expect(userFindUniqueSpy).toHaveBeenCalledWith({
                where: {
                    name
                }
            });
            expect(userCreateSpy).not.toHaveBeenCalled();
        });
        test('should create account if not found', async ()=>{
            userFindUniqueSpy.mockResolvedValue(null);
            userCreateSpy.mockResolvedValue(userMock);
            expect(await usersRouter.login(name)).toEqual(userMock);
            expect(userFindUniqueSpy).toHaveBeenCalledWith({
                where: {
                    name
                }
            });
            expect(userCreateSpy).toHaveBeenCalledWith({
                data: {
                    name
                }
            });
        });
    });
    describe('byName', ()=>{
        test('should return found user', async ()=>{
            userFindUniqueSpy.mockResolvedValue(userMock);
            expect(await usersRouter.byName(name)).toEqual(userMock);
            expect(userFindUniqueSpy).toHaveBeenCalledWith({
                where: {
                    name
                }
            });
        });
        test('should throw not found error', async ()=>{
            userFindUniqueSpy.mockResolvedValue(null);
            await expect(usersRouter.byName(name)).rejects.toThrowError('NOT_FOUND');
            expect(userFindUniqueSpy).toHaveBeenCalledWith({
                where: {
                    name
                }
            });
        });
    });
});

//# sourceMappingURL=user.router.spec.js.map