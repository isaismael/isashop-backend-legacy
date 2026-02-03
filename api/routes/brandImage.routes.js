const BrandImageController = require('../controllers/brandImage.controller');
const express = require('express');
const { authenticateToken, authorizeRoles, authorizePermissions } = require('../middleware/auth.middleware');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'api/uploads/brands');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.post('/createbrandImage', authenticateToken, authorizeRoles('IT'), upload.single('image'), BrandImageController.createBrandImage);

module.exports = router;