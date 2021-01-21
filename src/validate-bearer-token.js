const { API_TOKEN } = require('./config');

function validateBearerToken(req, res, next) {
  const authToken = req.get('Authorization');
  console.log(`Unauthorized request to path: ${req.path}`);

  if (!authToken || authToken.split(' ')[1] !== API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized request' });
  }

  next();
}

module.exports = validateBearerToken;
