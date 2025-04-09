import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

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