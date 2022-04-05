const express = require('express');
const router = express.Router();
const FileController = require('../controllers/FileController');

// Middlewares
const {fileUpload} = require('../helpers/file-upload');

router.get('/', FileController.home);
router.post('/upload', fileUpload.single('file'), FileController.uploadFile);

module.exports = router;



