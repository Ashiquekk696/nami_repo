const express = require('express');
const router = express.Router();
const {uploadImage} = require('../controller/home_controller')
const upload = require('../config/multer_config')
router.post('/upload',upload.single("image"),uploadImage)

module.exports=router