const express = require('express');
const { register, login, me } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', me);

module.exports = router;