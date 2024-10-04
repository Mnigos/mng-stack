"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "envSchema", {
    enumerable: true,
    get: function() {
        return envSchema;
    }
});
const _zod = require("zod");
const envSchema = _zod.z.object({
    PORT: _zod.z.coerce.number().optional().default(4000),
    DATABASE_HOST: _zod.z.string(),
    DATABASE_PORT: _zod.z.coerce.number().optional().default(5432),
    DATABASE_USERNAME: _zod.z.string().optional(),
    DATABASE_PASSWORD: _zod.z.string().optional(),
    DATABASE_NAME: _zod.z.string().optional(),
    DATABASE_URL: _zod.z.string()
});

//# sourceMappingURL=env.schema.js.map