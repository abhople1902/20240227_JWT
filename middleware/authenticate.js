// const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('../config');

// const authenticate = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Authorization header missing' });

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// module.exports = authenticate;


const jwt = require('jsonwebtoken');
const User = require('./models/User');

const authenticate = async (req, res, next) => {
  // Get the JWT token from the Authorization header
  const token = req.headers.authorization;

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  try {
    // Verify and decode the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Extract user ID from decoded token
    const userId = decoded.userId;

    // Fetch user from database based on user ID
    const user = await User.findById(userId);

    // Attach user object to request for use in subsequent middleware or routes
    req.user = user;

    // Proceed to the next middleware or route
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = authenticate;
