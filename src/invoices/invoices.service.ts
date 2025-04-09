import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { PaginatedResponse } from '../common/interfaces/pagination.interface';
import { Invoice } from '@prisma/client';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async getInvoices(
    userId: number,
    page: number = 1,
    limit: number = 10,
  ): Promise<PaginatedResponse<Invoice>> {
    const skip = (page - 1) * limit;
    const [invoices, total] = await Promise.all([
      this.prisma.invoice.findMany({
        where: { userId },
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.invoice.count({ where: { userId } }),
    ]);

    return {
      data: invoices,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findAll(userId: number) {
    return this.prisma.invoice.findMany({
      where: { userId },
    });
  }

  async findOne(id: number, userId: number) {
    const invoice = await this.prisma.invoice.findFirst({
      where: { id, userId },
    });

    if (!invoice) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }

    return invoice;
  }

  async create(createInvoiceDto: CreateInvoiceDto, userId: number) {
    return this.prisma.invoice.create({
      data: {
        ...createInvoiceDto,
        user: {
          connect: {
            id: userId
          }
        }
      },
    });
  }
} 