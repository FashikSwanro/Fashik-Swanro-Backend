import mongoose from "mongoose";

const couponModelSchema = new mongoose.Schema({
    couponCode : {type: String, required: false, default: ""},
    discount : {type: Number, required: false, default: ""},
    special : {type : Boolean , required : false , default : false}
})

const Coupon = mongoose.model("Coupon" , couponModelSchema);

export {
    Coupon
}