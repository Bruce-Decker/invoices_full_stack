import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    // Ensure page and limit are positive numbers
    req.query.page = Math.max(1, page).toString();
    req.query.limit = Math.min(100, Math.max(1, limit)).toString();

    next();
  }
} 