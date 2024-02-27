
// const bcrypt = require('bcryptjs');

// const generateSecretKey = async () => {
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const secretKey = await bcrypt.hash('ThinkDifferent', salt);
//     console.log('JWT Secret Key:', secretKey);
//   } catch (error) {
//     console.error('Error generating secret key:', error);
//   }
// };

// generateSecretKey();


// config.js
require('dotenv').config(); // Load environment variables from .env file

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = { JWT_SECRET };
