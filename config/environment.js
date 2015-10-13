'use strict';

module.exports = environment => {
  let ENV = {
    db: {
      dialect: 'postgres',
      database: 'assent',
      username: 'dbadmin',
      password: 'C0mplexPwd',
      port: 5432,
      define: {
        underscored: true
      }
    }
  };

  if (environment === 'development') {
    ENV.db.host = '127.0.0.1';
  }

  if (environment === 'test') {

  }

  if (environment === 'production') {
    ENV.db.host = 'rds-assent.cext2v4uawv7.eu-west-1.rds.amazonaws.com';
  }

  return ENV;
};
