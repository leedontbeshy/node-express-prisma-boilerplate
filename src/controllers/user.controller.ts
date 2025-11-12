import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { ApiResponse } from '../common/apiResponse';
import { HTTP_STATUS } from '../common/httpStatus';
import { asyncHandler } from '../utils/asyncHandler';

// User Controller - Request handlers
export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  // GET /api/users - Get all users
  getAllUsers = asyncHandler(async (req: Request, res: Response) => {
    const users = await this.userService.getAllUsers();
    res.status(HTTP_STATUS.OK).json(
      ApiResponse.success(users, 'Users retrieved successfully')
    );
  });

  // GET /api/users/:id - Get user by ID
  getUserById = asyncHandler(async (req: Request, res: Response) => {
    const id = parseInt(req.params['id'] as string);
    const user = await this.userService.getUserById(id);
    res.status(HTTP_STATUS.OK).json(
      ApiResponse.success(user, 'User retrieved successfully')
    );
  });

  // POST /api/users - Create new user
  createUser = asyncHandler(async (req: Request, res: Response) => {
    const user = await this.userService.createUser(req.body);
    res.status(HTTP_STATUS.CREATED).json(
      ApiResponse.success(user, 'User created successfully')
    );
  });

  // PUT /api/users/:id - Update user
  updateUser = asyncHandler(async (req: Request, res: Response) => {
    const id = parseInt(req.params['id'] as string);
    const user = await this.userService.updateUser(id, req.body);
    res.status(HTTP_STATUS.OK).json(
      ApiResponse.success(user, 'User updated successfully')
    );
  });

  // DELETE /api/users/:id - Delete user
  deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const id = parseInt(req.params['id'] as string);
    const result = await this.userService.deleteUser(id);
    res.status(HTTP_STATUS.OK).json(
      ApiResponse.success(result, 'User deleted successfully')
    );
  });
}
