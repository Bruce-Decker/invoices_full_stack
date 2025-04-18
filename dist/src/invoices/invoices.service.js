"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InvoicesService = class InvoicesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getInvoices(userId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [invoices, total] = await Promise.all([
            this.prisma.invoice.findMany({
                where: { userId },
                skip,
                take: parseInt(limit.toString(), 10),
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
    async findAll(userId) {
        return this.prisma.invoice.findMany({
            where: { userId },
        });
    }
    async findOne(id, userId) {
        const invoice = await this.prisma.invoice.findFirst({
            where: { id, userId },
        });
        if (!invoice) {
            throw new common_1.NotFoundException(`Invoice with ID ${id} not found`);
        }
        return invoice;
    }
    async create(createInvoiceDto, userId) {
        return this.prisma.invoice.create({
            data: Object.assign(Object.assign({}, createInvoiceDto), { user: {
                    connect: {
                        id: userId
                    }
                } }),
        });
    }
};
exports.InvoicesService = InvoicesService;
exports.InvoicesService = InvoicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InvoicesService);
//# sourceMappingURL=invoices.service.js.map