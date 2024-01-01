import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { createOrder, newPayment, sendStripePublishableKey } from "../controllers/order.controller";
import { authorizeRoles } from "../middleware/auth";
import { getAllCourses } from "../controllers/course.controller";
import { updateAccessToken } from "../controllers/user.controller";


const orderRouter=express.Router();
orderRouter.post("/create-order",isAuthenticated,createOrder);
orderRouter.get("/get-orders",updateAccessToken,isAuthenticated,authorizeRoles("admin"),getAllCourses);

orderRouter.get("/payment/stripepublishablekey",sendStripePublishableKey);
orderRouter.post("/payment",newPayment)

export default orderRouter;