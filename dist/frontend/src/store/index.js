"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const authSlice_1 = require("./authSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        auth: authSlice_1.default,
    },
});
//# sourceMappingURL=index.js.map