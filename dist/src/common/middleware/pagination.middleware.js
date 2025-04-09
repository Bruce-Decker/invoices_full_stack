"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationMiddleware = void 0;
const common_1 = require("@nestjs/common");
let PaginationMiddleware = class PaginationMiddleware {
    use(req, res, next) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        req.query.page = Math.max(1, page).toString();
        req.query.limit = Math.min(100, Math.max(1, limit)).toString();
        next();
    }
};
exports.PaginationMiddleware = PaginationMiddleware;
exports.PaginationMiddleware = PaginationMiddleware = __decorate([
    (0, common_1.Injectable)()
], PaginationMiddleware);
//# sourceMappingURL=pagination.middleware.js.map