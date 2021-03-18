require('dotenv').config();

module.exports = {
  "url": process.env.DATABASE_URL,
  "username": process.env.USER,
  "password": process.env.PASSWORD,
  "database": process.env.DATABASE,
  "port": "5432",
  "host": process.env.HOST,
  "dialect": "postgres",
  "dialectOptions": {
    "ssl": {
        "rejectUnauthorized": false
    }
  },
  "define": {
    "timestamps": true,
    "underscored": true,
    "underscoredAll": true
  },
  "production": {
    "use_env_variable": "DATABASE_URL"
  }
}