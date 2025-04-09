import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { PaginatedResponse } from '../common/interfaces/pagination.interface';
import { Invoice } from '@prisma/client';
export declare class InvoicesService {
    private prisma;
    constructor(prisma: PrismaService);
    getInvoices(userId: number, page?: number, limit?: number): Promise<PaginatedResponse<Invoice>>;
    findAll(userId: number): Promise<{
        id: number;
        vendorName: string;
        amount: number;
        dueDate: Date;
        description: string | null;
        paid: boolean;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number, userId: number): Promise<{
        id: number;
        vendorName: string;
        amount: number;
        dueDate: Date;
        description: string | null;
        paid: boolean;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(createInvoiceDto: CreateInvoiceDto, userId: number): Promise<{
        id: number;
        vendorName: string;
        amount: number;
        dueDate: Date;
        description: string | null;
        paid: boolean;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
