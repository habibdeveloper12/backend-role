import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/login', userController.loginUser);
router.post('/signup', userController.signUpUser);
router.get('/user', userController.getUser);
router.get('/', userController.getByUser);

export const userRoutes = router;
