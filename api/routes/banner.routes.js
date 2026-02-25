const BannerController = require('../controllers/banner.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/getbanner', BannerController.getBanner);
router.put('/updatebanner/:id', authenticateToken, authorizeRoles('IT'), BannerController.updateBanner);

module.exports = router;