import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'

// Routes

const app = express()

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
mongoose.set('strictQuery', true);
app.use(cors())

dotenv.config()

mongoose
    .connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
     .then(() => app.listen(process.env.PORT, () => 
     console.log(`Listening at ${process.env.PORT}`)
     )).catch((e)=>{
        console.log(e);
     })
   
     // useage of routes
     app.use('/auth',AuthRoute)
     app.use('/user',UserRoute)