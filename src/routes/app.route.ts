import * as winston from 'winston';
import {Express, Request, Response} from 'express';

import * as userRoutes from '../routes/users.route';


export function initRoutes(app: Express) {
  winston.log('info', '--> Route Initialization');

  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!'
  }));

  // Add Other route files here
  userRoutes.routes(app);

  app.all('*', (req: Request, res: Response) => res.boom.notFound());
}
