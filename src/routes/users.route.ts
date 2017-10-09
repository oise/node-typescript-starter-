import {Express} from 'express';
import * as UsersController from '../controllers/users.controller';


export function routes(app: Express) {

  app.post('/api/users', UsersController.createUser);
  app.get('/api/users', UsersController.getUsers);

}


