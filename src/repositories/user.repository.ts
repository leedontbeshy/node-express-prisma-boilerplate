import { prisma } from '../config/database';
import { CreateUserDto, UpdateUserDto } from '../types/user.types';

// User Repository - Database access layer
export class UserRepository {
    // Get all users
    async findAll() {
        return await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }

    // Get user by ID
    async findById(id: number) {
        return await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }

    // Get user by email
    async findByEmail(email: string) {
        return await prisma.user.findUnique({
            where: { email },
        });
    }

    // Create new user
    async create(data: CreateUserDto) {
        return await prisma.user.create({
            data,
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }

    // Update user
    async update(id: number, data: UpdateUserDto) {
        return await prisma.user.update({
            where: { id },
            data,
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }

    // Delete user
    async delete(id: number) {
        return await prisma.user.delete({
            where: { id },
        });
    }
}
