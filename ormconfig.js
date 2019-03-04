const config = require('config');

module.exports = {
  type: config.get('db.type'),
  host: config.get('db.host'),
  port: config.get('db.port'),
  username: config.get('db.user'),
  password: config.get('db.password'),
  database: config.get('db.name'),
  synchronize: config.get('db.sync'),
  cache: config.get('db.cache'),
  logging: config.get('db.logging'),
  logger: config.get('db.logger'),
  entities: [
    config.get('db.entitiesPath')
  ],
  migrations: [
    "dist/migrations/**/*.js"
  ],
  cli: {
    entitiesDir: "app/entities",
    migrationsDir: "app/migrations"
  }
};
