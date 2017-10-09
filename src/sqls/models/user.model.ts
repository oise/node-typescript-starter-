import uuid = require('uuid')
import db from './db'
import * as Sequelize from 'sequelize'

export interface UserAttributes {
  id?: string;
  active?: boolean;
  avatar?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  notification?: boolean;
  phone?: string;
  pwd?: string;
  languageId?: string;
}

export interface UserInstance {
  email: string;
  pwd: string;
  languageId: string;
}

/*const Users = db.define<UserAttributes, UserInstance>('User', {
  'email': {
    'type': Sequelize.STRING(128),
    'allowNull': false,
    'unique': true,
    'validate': {
      'isEmail': true
    }
  },
  'pwd': {
    'type': Sequelize.STRING(128),
    'allowNull': false
  }
})*/

export class User {
  private userModel: any;

  constructor() {
    this.userModel = db.define<UserAttributes, UserInstance>('User', {
      'email': {
        'type': Sequelize.STRING(128),
        'allowNull': false,
        'unique': true,
        'validate': {
          'isEmail': true
        }
      },
      'pwd': {
        'type': Sequelize.STRING(128),
        'allowNull': false
      },
      'languageId': {
        'type': Sequelize.STRING(128),
        'allowNull': false
      }
    })
  }

  create(user: UserInstance): Promise<any> {
    return this.userModel.create({
      id: uuid.v1(),
      email: user.email,
      pwd: user.pwd,
      languageId: uuid.v1()
    })
  }

  findAll(): Promise<any> {
    return this.userModel.findAll({include: [{all: true}]})
  }

  login(user: UserInstance): Promise<any> {
    return this.userModel
      .findOne({
        where: {
          email: user.email,
          pwd: user.pwd
        }
      })
  }
}
