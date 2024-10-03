import express from 'express';
import { addOffer, getOffers } from '../controllers/offerControllers';


const offerRouter = express.Router();

// post routers
offerRouter.post("/add" , addOffer);

// get routers
offerRouter.get("/get" , getOffers);


export default offerRouter;