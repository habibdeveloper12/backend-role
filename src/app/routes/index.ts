import express from 'express';
import { sectorRoutes } from '../modules/sector/sector.route';
import { userRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/sector',
    route: sectorRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
