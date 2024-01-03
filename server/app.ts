require('dotenv').config();
import express, { NextFunction } from "express";
export const app=express();
import cors from "cors";
import cookieParser from "cookie-parser"
import { Request,Response } from "express";
import {ErrorMiddleware} from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";
import notificationRouter from "./routes/notification.route";
import analyticsRouter from "./routes/analytics.route";
import layoutRouter from "./routes/layout.route";
import connectDB from "./utils/db";
import {v2 as cloudinary} from "cloudinary"
import http from "http"
import { loginUser } from "./controllers/user.controller";

//body parser

app.use(express.json({limit:"50mb"}));

//cookie parser

app.use(cookieParser())

//cors=>cross origin resource sharing

const options = [
    cors({
      origin: '*',
      methods: '*',
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    })
  ];
  
app.use(options);

//routes
app.use("/api/v1",userRouter,orderRouter,courseRouter,notificationRouter,analyticsRouter,layoutRouter);


//testing route 
app.get("/test",(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({
        success:true,
        message:"API is working"
    })
});

//unknown route
app.all("*",(req:Request,res:Response,next:NextFunction)=>{
    const err=new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode=404;
    next(err);
})

app.use(ErrorMiddleware);



//cloudinary config
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECRET_KEY,
})

connectDB();
//create server
app.listen(process.env.PORT,()=>{
    console.log(`Server is connected with port ${process.env.PORT}`)
 
});