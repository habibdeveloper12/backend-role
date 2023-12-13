/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
interface Sector<T> {
  // Define the properties of a sector
  // Replace 'string' with the actual type of the sector data
  id: string;
  data: T;
}
export type ISectors = {
  id: string;
  name: string;
  sectors: Array<Sector<string>>;
};

export type SectorModel = Model<ISectors>;
