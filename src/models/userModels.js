import mongoose from "mongoose";

const addressModelSchema = new mongoose.Schema({
    city: { type: String, required: false, default: "" },
    state: { type: String, required: false, default: "" },
    country: { type: String, required: false, default: "" },
    postcode: { type: String, required: false, default: "" },
    streetAddress: { type: String, required: false, default: "" },
})

const userModelSchema = new mongoose.Schema({
    firstName: { type: String, required: false, default: "" },
    lastName: { type: String, required: false, default: "" },
    email: { type: String, required: false, default: "" },
    token: { type: String, required: false, default: "" },
    phoneNumber: { type: String, required: false, default: "" },
    dob: { type: String, required: false, default: "" },
    gender: { type: String, required: false, default: "" },
    billingAddress: { type: addressModelSchema, required: false, default: "" },
    shippingAddress: { type: addressModelSchema, required: false, default: "" },
})

const User = mongoose.model("User", userModelSchema);

export {
    User
}