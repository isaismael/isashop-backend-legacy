const express = require('express');
const PromoBannerController = require('../controllers/PromoBanner.controller');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

//createPromoBanner
router.post('/createpromobanner', authenticateToken, authorizeRoles('IT'), PromoBannerController.createPromoBanner);
// get PromoBanner
router.get('/getpromobanner', authenticateToken, authorizeRoles('IT'),PromoBannerController.getPromoBanner)

// update PromoBanner
router.put('/updatepromobanner/:id', authenticateToken, authorizeRoles('IT'), PromoBannerController.updatePromoBanner);


// ruta publica para el store
router.get('/public/getpromobanner', PromoBannerController.getPromoBannerPublic);

module.exports = router;