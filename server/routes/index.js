const express = require('express');
const router = express.Router();
const {signup, login, forgotPassword} = require("../controllers/authController");
const { validateSignup, validateLogin, validateForgotPassword } = require('../validation/authValidator');
const validateInputs = require('../middleware/validationMiddleware');
const auth = require('../middleware/authMiddleware');
const { addSong } = require('../controllers/songController');
const validateAddSong = require('../validation/songValidation');
const upload = require('../middleware/uploadMiddleware');

router.post('/signup', validateSignup, validateInputs, signup);
router.post('/login',validateLogin, validateInputs, login);
router.post('/forgot-password',validateForgotPassword, validateInputs, forgotPassword);

router.get('/', auth.userMiddleware, (req, res) => {
    res.status(200).json({ message: 'Access granted to protected route', user: req.user });
});

router.get('/admin', auth.authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Access granted to protected route', user: req.user });
});

router.post('/admin/add', validateAddSong, validateInputs, auth.authMiddleware, upload.single('songFile'), addSong);

module.exports = router;