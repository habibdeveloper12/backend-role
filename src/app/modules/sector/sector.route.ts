import express from 'express';
import { sectorController } from './sector.controller';

const router = express.Router();

router.post('/sector', sectorController.createSector);
router.get('/sector', sectorController.getSector);

export const sectorRoutes = router;
