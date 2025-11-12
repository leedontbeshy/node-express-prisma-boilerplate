import app from './app';
import { ENV } from './config/env';
import { connectDatabase, disconnectDatabase } from './config/database';

// Start server
const startServer = async () => {
    try {
        // Connect to database
        await connectDatabase();

        // Start Express server
        const server = app.listen(ENV.PORT, () => {
            console.log(`Server is running on port ${ENV.PORT}`);
            console.log(`Environment: ${ENV.NODE_ENV}`);
            console.log(`Health check: http://localhost:${ENV.PORT}/health`);
        });

        // Graceful shutdown
        process.on('SIGTERM', async () => {
            console.log('SIGTERM received, shutting down gracefully...');
            server.close(async () => {
                await disconnectDatabase();
                process.exit(0);
            });
        });

        process.on('SIGINT', async () => {
            console.log('SIGINT received, shutting down gracefully...');
            server.close(async () => {
                await disconnectDatabase();
                process.exit(0);
            });
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
