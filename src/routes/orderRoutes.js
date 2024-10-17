import express from 'express';
import { addOrder, editOrder, getAllOrders, getOrders } from '../controllers/orderControllers';

const orderRouter = express.Router();

// post routers
orderRouter.post("/add", addOrder);
orderRouter.post("/get", getOrders);
orderRouter.post("/edit", editOrder)

// get routers
orderRouter.get("/getAll", getAllOrders);

export default orderRouter;