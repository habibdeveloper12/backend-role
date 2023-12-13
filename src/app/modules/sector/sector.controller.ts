import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { sectorService } from './sector.service';

const createSector: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const body = req.body;
    const result = await sectorService.createSector(body);
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is Sectors!',
      data: result,
    });
  }
);
const getSector: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result = await sectorService.getSector();
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is Sector!',
      data: result,
    });
  }
);

export const sectorController = {
  createSector,
  getSector,
};
