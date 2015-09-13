'use strict';

let fs        = require('fs');
let path      = require('path');
let Sequelize = require('sequelize');
let env       = process.env.NODE_ENV || 'dev';
let config    = require(__dirname + '/../config/config.json')[env]['db'];
let sequelize = new Sequelize(config.database, config.username, config.password, config);
let db        = {};

fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach(file => {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
