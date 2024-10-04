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
    createThoughtSchema: function() {
        return createThoughtSchema;
    },
    editThoughtSchema: function() {
        return editThoughtSchema;
    },
    thoughtSchema: function() {
        return thoughtSchema;
    }
});
const _zod = require("zod");
const _userschema = require("../users/user.schema");
const thoughtSchema = _zod.z.object({
    id: _zod.z.string(),
    content: _zod.z.string(),
    author: _userschema.userSchema,
    createdAt: _zod.z.date()
});
const createThoughtSchema = thoughtSchema.pick({
    content: true
}).extend({
    authorId: _zod.z.string()
});
const editThoughtSchema = thoughtSchema.pick({
    content: true,
    id: true
});

//# sourceMappingURL=thought.schema.js.map