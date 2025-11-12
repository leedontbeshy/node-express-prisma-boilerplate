import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { validateRequest } from '../middlewares/validateRequest';
import { z } from 'zod';

const router = Router();
const userController = new UserController();

// Validation schemas
const createUserSchema = z.object({
    email: z.string().email('Invalid email format'),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

const updateUserSchema = z.object({
    email: z.string().email('Invalid email format').optional(),
    name: z.string().min(2, 'Name must be at least 2 characters').optional(),
    password: z.string().min(6, 'Password must be at least 6 characters').optional(),
});

// Routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', validateRequest(createUserSchema), userController.createUser);
router.put('/:id', validateRequest(updateUserSchema), userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
