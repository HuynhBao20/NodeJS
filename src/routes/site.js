const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteControllers');

router.use('/', siteController.index);
router.use('/:slug', siteController.search);


module.exports = router;