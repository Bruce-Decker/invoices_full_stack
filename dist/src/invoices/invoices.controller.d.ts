import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    findAll(userId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        vendorName: string;
        amount: number;
        dueDate: Date;
        description: string | null;
        paid: boolean;
        userId: number;
    }[]>;
    findOne(id: string, userId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        vendorName: string;
        amount: number;
        dueDate: Date;
        description: string | null;
        paid: boolean;
        userId: number;
    }>;
    create(createInvoiceDto: CreateInvoiceDto, userId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        vendorName: string;
        amount: number;
        dueDate: Date;
        description: string | null;
        paid: boolean;
        userId: number;
    }>;
}
