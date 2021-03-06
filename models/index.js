'use strict';

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize,Sequelize);
db.Board = require('./board')(sequelize,Sequelize);

db.User.hasMany(db.Board, {foreignKey:'userNo',sourceKey:'id'});
db.Board.belongsTo(db.User,{foreignKey:'userNo',targetKey:'id'});

module.exports = db;
 