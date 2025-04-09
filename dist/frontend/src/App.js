"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const react_query_1 = require("@tanstack/react-query");
const store_1 = require("./store");
const LoginPage_1 = require("./pages/LoginPage");
const InvoicesPage_1 = require("./pages/InvoicesPage");
const react_redux_2 = require("react-redux");
const queryClient = new react_query_1.QueryClient();
function PrivateRoute({ children }) {
    const isAuthenticated = (0, react_redux_2.useSelector)((state) => state.auth.isAuthenticated);
    return isAuthenticated ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }) : (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/" });
}
function App() {
    return ((0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_1.store, children: (0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, { client: queryClient, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(LoginPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/invoices", element: (0, jsx_runtime_1.jsx)(PrivateRoute, { children: (0, jsx_runtime_1.jsx)(InvoicesPage_1.default, {}) }) })] }) }) }) }));
}
exports.default = App;
//# sourceMappingURL=App.js.map