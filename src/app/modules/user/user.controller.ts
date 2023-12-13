import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { userService } from './user.service';

const loginUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const email = req.body;
    const result = await userService.loginUser(email);
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Login Success!',
      data: {
        accessToken: result,
      },
    });
  }
);
const signUpUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const body = req.body;
    const result = await userService.signUpUser(body);
    // console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'SignUp Success!',
      data: result,
    });
  }
);
const getUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await userService.getUser();
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is Sector!',
      data: result,
    });
  }
);
const getByUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const email = req.query.email;
    console.log(email);
    const result = await userService.getByUser(email);
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is user!',
      data: result,
    });
  }
);

export const userController = {
  loginUser,
  getUser,
  signUpUser,
  getByUser,
};
