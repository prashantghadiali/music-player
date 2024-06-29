const { body } = require('express-validator');

const validateAddSong = [
    body('title').notEmpty().withMessage('Title is required'),
    body('artist').notEmpty().withMessage('Artist is required'),
    body('duration').isNumeric().withMessage('Duration must be a number'),
  ]

module.exports = validateAddSong;