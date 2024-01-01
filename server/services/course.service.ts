import {Response} from "express";
import CourseModel from "../models/course.model";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";

//create course
export const createCourse=CatchAsyncError(async(data:any,res:Response)=>{
    console.log("koo")
    const course=await CourseModel.create(data);
    console.log("opppp")
    res.status(201).json({
        success:true,
        course
    });
})

//Get All Courses
export const getAllCoursesService=async(res:Response)=>{
    const courses=await CourseModel.find().sort({createdAt:-1});
    console.log(".ay")
    console.log(courses)
    console.log(".ay1")
    res.status(201).json({
        success:true,
        courses
    })


}

