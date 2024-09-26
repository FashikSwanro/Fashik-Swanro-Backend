import mongoose from "mongoose";

const storeModelSchema = new mongoose.Schema({
    name : {type: String, required: true, default: ""},
    email : {type: String, required: true, default: ""},
    contactNumber : {type: String, required: false, default: ""},
    address : {type: String, required: true, default: ""},
    latitude : {type: String, required: true, default: ""},
    longitude : {type: String, required: true, default: ""},
    zipCode : {type: String, required: true, default: ""}
})

const Store = mongoose.model("Store" , storeModelSchema);

export {
    Store
}