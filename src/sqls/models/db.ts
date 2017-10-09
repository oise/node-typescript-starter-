import * as Sequelize from 'sequelize'

const config = require('../config/config.json')

const dbConfig = config[process.env.NODE_ENV]
const db = new Sequelize(
  dbConfig['database'],
  dbConfig['username'],
  dbConfig['password'],{dialect: 'mysql'}
);

export default db;
