import { Order } from "../models/orderModels";

const addOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        const response = await order.save();
        res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Add Order"  : ${error}` });
    }
}

const getAllOrders = async (req, res) => {
    try {
        const response = await Order.find({});
        res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Find Orders"  : ${error}` });
    }
}

const getOrders = async (req, res) => {
    try {
        const userId = req.body.userId
        const response = await Order.find({userId : userId});
        res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Find Orders"  : ${error}` });
    }
}

export {
    getAllOrders ,
    addOrder,
    getOrders
}