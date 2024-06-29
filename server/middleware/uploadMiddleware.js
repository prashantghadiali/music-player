const multer = require('multer');
const path = require('path');

// Storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/songs'); // Destination folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique file name
  },
});

// File filter for multer (optional)
const fileFilter = (req, file, cb) => {
  // Allow only mp3 files for example
  if (file.mimetype === 'audio/mpeg' || file.mimetype === 'audio/mp3') {
    cb(null, true);
  } else {
    cb(new Error('Only .mp3 files are allowed!'), false);
  }
};

// Initialize multer upload
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
