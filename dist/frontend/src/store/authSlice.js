"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.setCredentials = exports.authSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'),
};
exports.authSlice = (0, toolkit_1.createSlice)({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { access_token } = action.payload;
            state.token = access_token;
            state.isAuthenticated = true;
            localStorage.setItem('token', access_token);
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        },
    },
});
_a = exports.authSlice.actions, exports.setCredentials = _a.setCredentials, exports.logout = _a.logout;
exports.default = exports.authSlice.reducer;
//# sourceMappingURL=authSlice.js.map