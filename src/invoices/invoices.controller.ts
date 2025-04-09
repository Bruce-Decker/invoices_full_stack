import { Controller, Get, Post, Body, Param, UseGuards, Query } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { PaginationDto } from '../common/dto/pagination.dto';
import { PaginatedResponse } from '../common/interfaces/pagination.interface';
import { Invoice } from '@prisma/client';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('invoices')
@ApiBearerAuth()
@Controller('invoices')
@UseGuards(JwtAuthGuard)
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  async findAll(
    @GetUser('id') userId: number,
    @Query() paginationDto: PaginationDto,
  ): Promise<PaginatedResponse<Invoice>> {
    return this.invoicesService.getInvoices(
      userId,
      paginationDto.page,
      paginationDto.limit,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser('id') userId: number) {
    return this.invoicesService.findOne(+id, userId);
  }

  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto, @GetUser('id') userId: number) {
    return this.invoicesService.create(createInvoiceDto, userId);
  }
} 