"use strict";
exports.__esModule = true;
var uuid = require("uuid");
var db_1 = require("./db");
var Sequelize = require("sequelize");
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
var User = /** @class */ (function () {
    function User() {
        this.userModel = db_1["default"].define('User', {
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
        });
    }
    User.prototype.create = function (user) {
        return this.userModel.create({
            id: uuid.v1(),
            email: user.email,
            pwd: user.pwd,
            languageId: uuid.v1()
        });
    };
    User.prototype.findAll = function () {
        return this.userModel.findAll({ include: [{ all: true }] });
    };
    User.prototype.login = function (user) {
        return this.userModel
            .findOne({
            where: {
                email: user.email,
                pwd: user.pwd
            }
        });
    };
    return User;
}());
exports.User = User;
/*export function create(user: UserInstance): Promise<any> {
  return this.create({
    id: uuid.v1(),
    email: user.email,
    pwd: user.pwd,
    languageId: uuid.v1()
  })
}

export function findAll(): Promise<any> {
  return this
    .findAll({include: [{all: true}]})
}

export function login(user: UserInstance): Promise<any> {
  return this
    .findOne({
      where: {
        email: user.email,
        pwd: user.pwd
      }
    })
}


export default User*/
