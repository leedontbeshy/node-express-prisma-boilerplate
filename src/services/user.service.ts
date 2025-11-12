import { UserRepository } from '../repositories/user.repository';
import { CreateUserDto, UpdateUserDto } from '../types/user.types';
import { AppError } from '../middlewares/errorHandler';
import { HTTP_STATUS } from '../common/httpStatus';
import bcrypt from 'bcryptjs';

// User Service - Business logic layer
export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // Get all users
  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  // Get user by ID
  async getUserById(id: number) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new AppError(HTTP_STATUS.NOT_FOUND, 'User not found');
    }
    return user;
  }

  // Create new user
  async createUser(data: CreateUserDto) {
    // Check if user already exists
    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new AppError(HTTP_STATUS.BAD_REQUEST, 'Email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create user
    return await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
  }

  // Update user
  async updateUser(id: number, data: UpdateUserDto) {
    // Check if user exists
    await this.getUserById(id);

    // Hash password if provided
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return await this.userRepository.update(id, data);
  }

  // Delete user
  async deleteUser(id: number) {
    // Check if user exists
    await this.getUserById(id);

    await this.userRepository.delete(id);
    return { message: 'User deleted successfully' };
  }
}
