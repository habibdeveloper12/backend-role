/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IUser = {
  id: string;
  name: string;
  email: string;
  password: String;
  role: string;
};

export type UserModel = Model<IUser>;
