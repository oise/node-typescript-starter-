import {Request, Response} from 'express';
import {User} from '../sqls/models/user.model';

const user = new User();

export function createUser(req: Request, res: Response) {

  req.checkBody('pwd', 'Password is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'A valid email is required').isEmail();

  req.getValidationResult()
    .then((result) => {
      if (result.isEmpty()) {
        user.create(req.body)
          .then((user) => res.status(200).json('User Created'))
          .catch((error) => res.boom.badRequest(error));
      }
      else {
        res.boom.badRequest('Validation errors', result.mapped());
      }
    });
}

export function getUsers(req: Request, res: Response) {
  user.findAll()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.boom.badRequest(error));
}

