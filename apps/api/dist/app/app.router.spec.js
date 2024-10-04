"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _approuter = require("./app.router");
describe('AppRouter', ()=>{
    let moduleRef;
    let appRouter;
    beforeAll(async ()=>{
        moduleRef = await _testing.Test.createTestingModule({
            providers: [
                _approuter.AppRouter
            ]
        }).compile();
        appRouter = moduleRef.get(_approuter.AppRouter);
    });
    afterAll(async ()=>{
        await moduleRef.close();
    });
    test('should be defined', ()=>{
        expect(appRouter).toBeDefined();
    });
    describe('greeting', ()=>{
        test('should return greeting', ()=>{
            const name = 'test';
            expect(appRouter.greeting(name)).toEqual({
                message: `Hello ${name}!`
            });
        });
    });
});

//# sourceMappingURL=app.router.spec.js.map