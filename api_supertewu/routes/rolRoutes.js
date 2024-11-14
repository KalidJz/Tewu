// routes/rolRoutes.js
const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

router.get('/rol', rolController.getRoles);

module.exports = router;
