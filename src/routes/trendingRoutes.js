import express from 'express';
import { addTrending, getTrending } from '../controllers/trendingControllers';


const trendingRouter = express.Router();

// post routers
trendingRouter.post("/add" , addTrending);

// get routers
trendingRouter.get("/get" , getTrending);


export default trendingRouter;