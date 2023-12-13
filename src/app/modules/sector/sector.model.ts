/* eslint-disable @typescript-eslint/no-this-alias */

import { Document, Schema, model } from 'mongoose';
import generateUniqueId from '../../utils/generateUniqueId';

// Define the friend schema
const friendSchema = new Schema({
  id: Number,
  name: String,
});

// Define the user schema
const CalculatorSchema = new Schema<ISector & Document>(
  {
    id: {
      type: String,
      unique: true,
    },
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String,
    friends: [friendSchema], // Array of friend objects
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// Pre-save hook to generate a unique id if it's not provided
CalculatorSchema.pre('save', function (next) {
  if (!this.id) {
    this.id = generateUniqueId();
  }
  next();
});

export const Sector = model<ISector & Document>('sector', CalculatorSchema);

// Define the interface for the sector document
export interface ISector {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  friends: {
    id: number;
    name: string;
  }[];
}

// Define the model type for the sector model
export type SectorModel = typeof Sector;
