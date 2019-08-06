const multer = require('multer')
const storage = require('./multer')
let upload = multer({ storage: storage });
module.exports = function (app) {
    app.get('/', (req, res) => {
        console.log("hit")
        db.query("SELECT * FROM file", function (err, results) {
            let files = results
            console.log(files)
            if (err) { console.log(err) }
            else  {
                console.log(files)
                res.render('index', { files });
            }
            
        })
    })
    message = ''
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
            let sql = "INSERT INTO `file`(`name`, `type`, `size`) VALUES ('" + req.file.filename + "', '" + req.file.mimetype + "', '" + req.file.size + "')";

            var query = db.query(sql, function (err, result) {
                if (err) {
                    console.log(err)
                } else { console.log('inserted data') }

            });
            message = "Successfully! uploaded";
            res.redirect('/');

        }
    });
    app.post('/api/delete', (req,res)=>{
        let id =req.body.id
        let sql = `DELETE FROM file WHERE id = ${id}`
        db.query(sql,(err, results)=>{
            if(err) console.log(err)
            else{
                console.log('beleted')
                res.sendStatus(200)
            }
        })
    })
}