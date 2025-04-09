"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const zod_1 = require("zod");
const api_1 = require("../services/api");
const authSlice_1 = require("../store/authSlice");
const axios_1 = require("axios");
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address'),
    password: zod_1.z.string().min(1, 'Password is required'),
});
function LoginPage() {
    const [email, setEmail] = (0, react_1.useState)('test@example.com');
    const [password, setPassword] = (0, react_1.useState)('password123');
    const [error, setError] = (0, react_1.useState)('');
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleSubmit = async (e) => {
        var _a, _b;
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            const result = loginSchema.parse({ email, password });
            const response = await (0, api_1.login)(result.email, result.password);
            dispatch((0, authSlice_1.setCredentials)({ access_token: response.access_token }));
            navigate('/invoices');
        }
        catch (err) {
            console.error('Login error:', err);
            if (err instanceof zod_1.z.ZodError) {
                setError(err.errors[0].message);
            }
            else if (axios_1.default.isAxiosError(err)) {
                setError(((_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || 'Login failed. Please check your credentials.');
            }
            else {
                setError('An unexpected error occurred');
            }
        }
        finally {
            setIsLoading(false);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-md w-full space-y-8", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "Sign in to your account" }) }), (0, jsx_runtime_1.jsxs)("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { className: "rounded-md shadow-sm -space-y-px", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }), (0, jsx_runtime_1.jsx)("input", { id: "email-address", name: "email", type: "email", autoComplete: "email", required: true, className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm", placeholder: "Email address", value: email, onChange: (e) => setEmail(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "password", className: "sr-only", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value) })] })] }), error && ((0, jsx_runtime_1.jsx)("div", { className: "text-red-500 text-sm text-center", children: error })), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { type: "submit", disabled: isLoading, className: `group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${isLoading
                                    ? 'bg-indigo-400 cursor-not-allowed'
                                    : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`, children: isLoading ? 'Signing in...' : 'Sign in' }) })] })] }) }));
}
//# sourceMappingURL=LoginPage.js.map