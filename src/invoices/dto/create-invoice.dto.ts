import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateInvoiceDto {
  @IsString()
  @IsNotEmpty()
  vendorName: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @Type(() => Date)
  dueDate: Date;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  paid: boolean;
} 