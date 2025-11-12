import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
import { ApiResponse } from '../common/apiResponse';
import { HTTP_STATUS } from '../common/httpStatus';

// Validation middleware using Zod
export const validateRequest = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(HTTP_STATUS.BAD_REQUEST).json(
          ApiResponse.error('Validation failed', error.message)
        );
        return;
      }
      res.status(HTTP_STATUS.BAD_REQUEST).json(
        ApiResponse.error('Validation failed')
      );
    }
  };
};
