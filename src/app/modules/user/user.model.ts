/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import generateUniqueId from '../../utils/generateUniqueId';
import { IUser, UserModel } from './user.interface';

const UserSchema = new Schema<IUser, UserModel>(
  {
    id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
UserSchema.pre('save', function (next) {
  // Ensure that this.id is set to a unique value or remove this block if not needed
  if (!this.id) {
    this.id = generateUniqueId();
  }
  next();
});
export const User = model<IUser, UserModel>('user', UserSchema);
