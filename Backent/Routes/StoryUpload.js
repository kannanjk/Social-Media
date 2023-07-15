import express from "express";
import multer from "multer";

const app = express()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/Story")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})
const upload = multer({
    storage: storage
})
app.post('/', upload.single('file'), (req, res) => {
    try {
        return res.status(200).send({
            success: true,
            message: " Image upload success"
        })
    } catch (error) {
        console.log(error);
    }
})

export default app