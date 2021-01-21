module.exports = {
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || 'postgresql://agiannotti@localhost/foodful-db',
  API_TOKEN: process.env.API_TOKEN || 'placeholder-token',
};
