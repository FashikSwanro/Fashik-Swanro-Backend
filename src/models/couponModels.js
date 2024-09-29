import mongoose from "mongoose";

const couponModelSchema = new mongoose.Schema({
    couponCode : {type: String, required: true, default: ""},
    discount : {type: Number, required: true, default: ""}
})

const Coupon = mongoose.model("Coupon" , couponModelSchema);

export {
    Coupon
}