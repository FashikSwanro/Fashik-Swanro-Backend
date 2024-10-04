import mongoose from "mongoose";

const couponModelSchema = new mongoose.Schema({
    couponCode : {type: String, required: false, default: ""},
    discount : {type: Number, required: false, default: ""}
})

const Coupon = mongoose.model("Coupon" , couponModelSchema);

export {
    Coupon
}