import express from 'express';
import { createUserProfile, editProfile, getAllUsers, getToken, sendOtp, userProfile, verifyOtp } from '../controllers/authControllers';
import { verifyToken } from '../middlewares/authMiddlewares';

const authRouter = express.Router();

// post routers
authRouter.post("/createUserProfile" , createUserProfile );
authRouter.post("/sendOtp" , sendOtp);
authRouter.post("/verifyOtp" , verifyOtp);
authRouter.post("/getToken" , getToken );
authRouter.post("/profile" , userProfile);
authRouter.post("/editProfile" , editProfile);

// get routers
authRouter.get("/allUsers" , getAllUsers)

export default authRouter;