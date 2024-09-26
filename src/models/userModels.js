import mongoose from "mongoose";

const address = new mongoose.Schema({
    
})

const userModelSchema = new mongoose.Schema({
    firstName : {type: String, required: true, default: ""},
    lastName : {type: String, required: true, default: ""},
    email : {type: String, required: true, default: ""},
    token : {type: String, required: false, default: ""},
    phoneNumber : {type: String, required: true, default: ""},
    dob : {type: String, required: true, default: ""},
    gender : {type: String, required: true, default: ""}
})

const User = mongoose.model("User" , userModelSchema);

export {
    User
}