import mongoose from "mongoose";

const orderModelSchema = new mongoose.Schema({
    firstName: { type: String, required: false, default: "" },
    lastName: { type: String, required: false, default: "" },
    phoneNumber: { type: String, required: false, default: "" },
    email: { type: String, required: false, default: "" },
    city: { type: String, required: false, default: "" },
    state: { type: String, required: false, default: "" },
    country: { type: String, required: false, default: "" },
    postcode: { type: String, required: false, default: "" },
    streetAddress: { type: String, required: false, default: "" },
    patternName: { type: String, required: false, default: "" },
    patternPrice: { type: String, required: false, default: "" },
    designName: { type: String, required: false, default: "" },
    designPrice: { type: String, required: false, default: "" },
    fabricName: { type: String, required: false, default: "" },
    fabricPrice: { type: String, required: false, default: "" },
    handworkPrice: { type: String, required: false, default: "" },
    size: { type: String, required: false, default: "" },
    subtotal: { type: String, required: false, default: "" },
    gst: { type: String, required: false, default: "" },
    grandTotal: { type: String, required: false, default: "" },
    amount: { type: String, required: false, default: "" },
    date: { type: String, required: false, default: "" },
    transactionId: { type: String, required: false, default: "" },
    status: { type: String, required: false, default: "placed" },
    acceptedTime: { type: String, required: false, default: "" },
    dispatchedTime: { type: String, required: false, default: "" },
    deliveredTime: { type: String, required: false, default: "" },
    userId: { type: String, required: false, default: "" },
})

const Order = mongoose.model("Order", orderModelSchema);

export {
    Order
}