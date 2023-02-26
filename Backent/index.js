import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import uploadRouter from './Routes/UploadRoute.js'

// Routes
const app = express()

// to server image for public
app.use(express.static('public'))
app.use('/images',express.static("images"))

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
mongoose.set('strictQuery', true);
app.use(cors())
dotenv.config()

mongoose
    .connect('mongodb+srv://jishnu:iV1nYHf77FYnp8Ju@cluster0.zppmaeb.mongodb.net/SocialMedia?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(process.env.PORT, () =>
        console.log(`Listening at ${process.env.PORT}`)
    )).catch((e) => {
        console.log(e);
    })

// useage of routes  
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute) 
app.use('/upload',uploadRouter)  