import { Coupon } from "../models/couponModels";

const addCoupon = async (req, res) => {
    try {
        const { couponCode, discount } = req.body
        if (!(couponCode && discount)) {
            res.status(400).send({ message: "All Inputs are Required" })
        }
        const coupon = new Coupon(req.body);
        const response = await coupon.save();
        res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Add Coupon"  : ${error}` });
    }
}

const getAllCoupons = async (req, res) => {
    try {
        const { special } = req.query;
        const response = special === false
            ? await Coupon.find({special : special})
            : await Coupon.find({});
        res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Find Coupon"  : ${error}` });
    }
}

const deleteCoupon = async ( req , res ) => {
    try{
        const { couponCode } = req.body
        console.log(req.body);
        const deleteRes = await Coupon.deleteOne({couponCode : couponCode});
        res.status(200).send(deleteRes);
    }catch (error) {
        return res.status(500).send({ message: `"Failed to Find Coupon"  : ${error}` });
    }
}

export {
    addCoupon,
    getAllCoupons,
    deleteCoupon
}