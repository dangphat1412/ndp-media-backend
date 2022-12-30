import { authRoutes } from '@auth/routes/authRoutes';
import { currentUserRoutes } from '@auth/routes/currentRoutes';
import { authMiddleware } from '@global/helpers/auth-middleware';
import { serverAdapter } from '@service/queues/base.queue';
import { Application } from 'express';

const BASE_AUTH = '/api/v1';

export default (app: Application) => {
  const routes = () => {
    app.use('/queues', serverAdapter.getRouter());
    app.use(BASE_AUTH, authRoutes.routes());
    app.use(BASE_AUTH, authRoutes.signoutRoute());

    app.use(BASE_AUTH, authMiddleware.verifyUser, currentUserRoutes.routes());
  };
  routes();
};
