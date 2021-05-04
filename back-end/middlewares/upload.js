const multer = require('multer');
const path = require('path');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//         console.log(file)
//         cb(null, 'dish' + '-' + Date.now() + path.extname(file.originalname));
//     }
// });
const filestorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '--' + file.originalname)
    }
  })

  const upload = multer({storage:filestorage});

// const fileFilter = (req, file, cb) => {
//     cb(null, true);
// };

// let upload = multer({
//     storage: storage,

//     fileFilter: fileFilter,
// });

module.exports = upload