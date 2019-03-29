'using strict';
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const processCtrl = require('../controllers/process');
const applicantCtrl = require('../controllers/applicant');
const superviserCtrl = require('../controllers/superviser');

router.get('/processes', auth, processCtrl.getAllProcesses);
router.post('/signin', auth, superviserCtrl.createSuperviser);
router.post('/login', superviserCtrl.loginSuperviser);

module.exports = router;
