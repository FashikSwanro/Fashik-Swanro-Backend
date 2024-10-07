import express from 'express';
import { addCoupon, deleteCoupon, getAllCoupons } from '../controllers/couponControllers';


const couponRouter = express.Router();

// post routers
couponRouter.post("/add" , addCoupon);

// get routers
couponRouter.get("/get" , getAllCoupons);

// delete routers
couponRouter.delete("/delete" , deleteCoupon);


export default couponRouter;