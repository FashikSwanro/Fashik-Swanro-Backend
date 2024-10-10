import express from 'express';
import { addOrder, getAllOrders, getOrders } from '../controllers/orderControllers';

const orderRouter = express.Router();

// post routers
orderRouter.post("/add" , addOrder);
orderRouter.post("/get" , getOrders);

// get routers
orderRouter.get("/getAll" , getAllOrders);

export default orderRouter;