export interface Invoice {
    id: number;
    vendorName: string;
    amount: number;
    dueDate: string;
    description: string;
    paid: boolean;
    userId: number;
    createdAt: string;
    updatedAt: string;
}
export interface InvoiceResponse {
    data: Invoice[];
    meta: {
        total: number;
        page: number;
        limit: number;
    };
}
