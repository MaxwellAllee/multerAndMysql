const multer = require('multer')
const storage = require('./multer')
let upload = multer({ storage: storage });
module.exports = function (app) {
    app.get('/', (req, res) => {
        db.query("SELECT * FROM file", function (err, results) {
            let files = results
            if (err) { console.log(err) }
            else if (results.length) {
                console.log(files)
                res.render('index', { files });
            }

        })
        // res.render('index', message);
        //     gfs.files.find().toArray((err, files) => {
        //         // Check if files
        //         if (!files || files.length === 0) {
        //             res.render('index', { files: false });
        //         } else {
        //             files.map(file => {
        //                 if (
        //                     file.contentType === 'image/jpeg' ||
        //                     file.contentType === 'image/png'
        //                 ) {
        //                     file.isImage = true;
        //                     file.isVideo = false;
        //                 }
        //                 else if (file.contentType === 'video/mp4') {
        //                     file.isImage = false;
        //                     file.isVideo = true;
        //                 } else {
        //                     file.isImage = false;
        //                     file.isVideo = true;
        //                 }
        //             });
        //             // console.log(files)
        //             // res.render('index', {files: files});
        //             res.render('index', { files });
        //         }
        //     });
        // });

        // // @route POST /upload
        // // @desc  Uploads file to DB
        // app.post('/upload', upload.single('file'), (req, res) => {
        //     // res.json({ file: req.file });
        //     res.redirect('/');
    })
    message = ''
    // app.get('/', function(req, res) {
    //     res.render('index', message);
    // });
    app.post('/upload', upload.single('file'), function (req, res) {
        console.log(req.profile)
        // upload.single('profile')
        console.log('made it')
        message: "Error! in image upload."
        if (!req.file) {
            console.log("No file received");
            message = "Error! in image upload."
            res.render('index', { message: message, status: 'danger' });

        } else {
            console.log('file received');
            console.log(req);
            var sql = "INSERT INTO `file`(`name`, `type`, `size`) VALUES ('" + req.file.filename + "', '" + req.file.mimetype + "', '" + req.file.size + "')";

            var query = db.query(sql, function (err, result) {
                if (err) {
                    console.log(err)
                } else { console.log('inserted data') }

            });
            message = "Successfully! uploaded";
            res.render('index', { message: message, status: 'success' });

        }
    });
}