import { ISector, Sector } from './sector.model';

const createSector = async (body: any): Promise<ISector | null> => {
  try {
    console.log(body);
    const createdSector = await Sector.create(body);

    return createdSector;
  } catch (error) {
    console.error('Error creating sector:', error);
    return null;
  }
};
const getSector = async (): Promise<any | null> => {
  const sector = Sector.find({});
  console.log(sector);
  return sector;
};

export const sectorService = {
  createSector,
  getSector,
};
