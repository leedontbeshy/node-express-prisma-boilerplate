import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../common/apiResponse';
import { HTTP_STATUS } from '../common/httpStatus';

// Global error handler middleware
export class AppError extends Error {
    constructor(
        public statusCode: number,
        public message: string,
        public isOperational = true,
    ) {
        super(message);
        Object.setPrototypeOf(this, AppError.prototype);
    }
}

export const errorHandler = (
    err: Error | AppError,
    req: Request,
    res: Response,
    _next: NextFunction,
) => {
    console.error('❌ Error:', err);

    if (err instanceof AppError) {
        return res.status(err.statusCode).json(ApiResponse.error(err.message, err.stack));
    }

    // Default error
    return res
        .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .json(ApiResponse.error('Internal Server Error', err.message));
};
