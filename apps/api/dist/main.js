"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _app = require("./app");
const _env = require("./config/env");
async function bootstrap() {
    const app = await _core.NestFactory.create(_app.AppModule, {
        cors: true
    });
    const envService = app.get(_env.EnvService);
    await app.listen(envService.get('PORT'));
}
bootstrap();

//# sourceMappingURL=main.js.map