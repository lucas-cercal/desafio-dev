const multer = require('multer');
const path = require('path');

// Destination to store the files
const fileStorage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "uploads/")
  },
  filename: function (req, file, cb){
    cb(null, file.originalname);
  },
});  

const fileUpload = multer({
    storage: fileStorage,
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(txt)$/)){
            // Upload only txt format
            cb(new Error('Por favor, envie apenas txt!'));
            return;
        }
        cb(undefined, true);
    }
    
});


module.exports = {fileUpload};

