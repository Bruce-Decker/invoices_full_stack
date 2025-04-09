import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
export declare class InvoicesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number, userId: number): Promise<{
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
