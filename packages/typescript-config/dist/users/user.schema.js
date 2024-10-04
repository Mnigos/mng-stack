"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createUserSchema: function() {
        return createUserSchema;
    },
    userSchema: function() {
        return userSchema;
    }
});
const _zod = require("zod");
const userSchema = _zod.z.object({
    id: _zod.z.string(),
    name: _zod.z.string(),
    createdAt: _zod.z.date()
});
const createUserSchema = userSchema.pick({
    name: true
});

//# sourceMappingURL=user.schema.js.map