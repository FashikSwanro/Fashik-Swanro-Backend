import express from 'express';
import { createUserProfile, getAllUsers, getToken, sendOtp, userProfile, verifyOtp } from '../controllers/authControllers';
import { verifyToken } from '../middlewares/authMiddlewares';

const authRouter = express.Router();

// post routers
authRouter.post("/createUserProfile" , createUserProfile );
authRouter.post("/sendOtp" , sendOtp);
authRouter.post("/verifyOtp" , verifyOtp)

// get routers
authRouter.get("/getToken" , getToken );
authRouter.get("/profile" , verifyToken , userProfile);
authRouter.get("/allUsers" , getAllUsers)

export default authRouter;