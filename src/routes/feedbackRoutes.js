import express from 'express';
import { addFeedback, getAllFeedbacks } from '../controllers/feedbackController';


const feedbackRouter = express.Router();

// post routers
feedbackRouter.post("/add" , addFeedback);

// get routers
feedbackRouter.get("/get" , getAllFeedbacks);


export default feedbackRouter;