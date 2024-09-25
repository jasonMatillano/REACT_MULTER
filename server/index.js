const express = require("express");
const multer = require("multer");

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    }
});

const upload = multer( {storage: fileStorage});

app.post( '/single', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send("File uploaded successfully");
});

app.post( '/multiple', upload.array('images', 3), (req, res) => {
    console.log(req.files);
    res.send("Files uploaded successfully");
});

app.listen(5000, () => {
    console.log("Server started on http://localhost:5000");
});