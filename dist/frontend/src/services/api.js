"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoice = exports.getInvoices = exports.login = void 0;
const axios_1 = require("axios");
const api = axios_1.default.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });
        return response.data;
    }
    catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};
exports.login = login;
const getInvoices = async (page = 1, limit = 10) => {
    try {
        const response = await api.get(`/invoices?page=${page}&limit=${limit}`);
        return response.data;
    }
    catch (error) {
        console.error('Get invoices error:', error);
        throw error;
    }
};
exports.getInvoices = getInvoices;
const getInvoice = async (id) => {
    const response = await api.get(`/invoices/${id}`);
    return response.data;
};
exports.getInvoice = getInvoice;
exports.default = api;
//# sourceMappingURL=api.js.map