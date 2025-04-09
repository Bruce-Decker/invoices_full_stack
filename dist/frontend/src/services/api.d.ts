declare const api: import("axios").AxiosInstance;
export declare const login: (email: string, password: string) => Promise<any>;
export declare const getInvoices: (page?: number, limit?: number) => Promise<any>;
export declare const getInvoice: (id: number) => Promise<any>;
export default api;
