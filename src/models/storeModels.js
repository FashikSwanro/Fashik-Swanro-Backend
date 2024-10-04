import mongoose from "mongoose";

const storeModelSchema = new mongoose.Schema({
    name : {type: String, required: false, default: ""},
    email : {type: String, required: false, default: ""},
    contactNumber : {type: String, required: false, default: ""},
    address : {type: String, required: false, default: ""},
    latitude : {type: String, required: false, default: ""},
    longitude : {type: String, required: false, default: ""},
    zipCode : {type: String, required: false, default: ""}
})

const Store = mongoose.model("Store" , storeModelSchema);

export {
    Store
}