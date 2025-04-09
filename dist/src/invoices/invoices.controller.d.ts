import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { PaginatedResponse } from '../common/interfaces/pagination.interface';
import { Invoice } from '@prisma/client';
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    findAll(userId: number, paginationDto: PaginationDto): Promise<PaginatedResponse<Invoice>>;
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
