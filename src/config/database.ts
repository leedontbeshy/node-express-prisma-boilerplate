import { PrismaClient } from '@prisma/client';

// Prisma Client instance
export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// Connect to database
export const connectDatabase = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};

// Disconnect from database
export const disconnectDatabase = async () => {
  await prisma.$disconnect();
  console.log('👋 Database disconnected');
};
