import express from 'express';
import { addCoupon, getAllCoupons } from '../controllers/couponControllers';


const couponRouter = express.Router();

// post routers
couponRouter.post("/add" , addCoupon);

// get routers
couponRouter.get("/get" , getAllCoupons);


export default couponRouter;