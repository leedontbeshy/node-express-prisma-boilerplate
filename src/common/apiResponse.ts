// Standard API Response format
export class ApiResponse<T> {
    constructor(
        public success: boolean,
        public message: string,
        public data?: T,
        public error?: string,
    ) {}

    static success<T>(data: T, message = 'Success'): ApiResponse<T> {
        return new ApiResponse(true, message, data);
    }

    static error(message: string, error?: string): ApiResponse<null> {
        return new ApiResponse(false, message, null, error);
    }
}
