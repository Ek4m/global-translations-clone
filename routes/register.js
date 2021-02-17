const express = require('express');
const registerRoutes = require('../controllers/register');
const router = express.Router();

router.get('/sign-in', registerRoutes.getSignIn);
router.post('/sign-in', registerRoutes.postSignIn);

router.get('/sign-up',registerRoutes.getSignUp);
router.post('/sign-up', registerRoutes.postSignUp);

router.get('/logout', registerRoutes.getLogout);


module.exports = router;