const { body } = require('express-validator');

// Validation rules for signup
const validateSignup = [
  body('email').isEmail().withMessage('Please enter a valid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Validation rules for login
const validateLogin = [
  body('email').isEmail().withMessage('Please enter a valid email address'),
  body('password').exists().withMessage('Password is required'),
];

// Validation rules for forgot password
const validateForgotPassword = [
  body('email').isEmail().withMessage('Please enter a valid email address'),
];

module.exports = {
  validateSignup,
  validateLogin,
  validateForgotPassword,
};
