import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

// Import routes
import userRoutes from './routes/user.routes';

// Import middlewares
import { errorHandler } from './middlewares/errorHandler';
import { ApiResponse } from './common/apiResponse';

// Create Express app
const app: Application = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api/', limiter);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json(ApiResponse.success({ status: 'OK', timestamp: new Date() }));
});

// API Routes
app.use('/api/users', userRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json(ApiResponse.error('Route not found'));
});

// Global error handler (must be last)
app.use(errorHandler);

export default app;
