"use strict";
exports.__esModule = true;
var Sequelize = require("sequelize");
var config = require('../config/config.json');
// Import model specification from its own definition file.
var dbConfig = config[process.env.NODE_ENV];
var db = new Sequelize(dbConfig['database'], dbConfig['username'], dbConfig['password'], { dialect: 'mysql' });
/*const basename = path.basename(module.filename)
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function(file) {
    const model = sequelize['import'](path.join(__dirname, file))
    // NOTE: you have to change from the original property notation to
    // index notation or tsc will complain about undefined property.
    db[model['name']] = model
  })

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db['sequelize'] = sequelize
db['Sequelize'] = Sequelize*/
exports["default"] = db;