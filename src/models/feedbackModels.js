import mongoose from "mongoose";

const feedbackModelSchema = new mongoose.Schema({
    name : {type: String, required: false, default: ""},
    email : {type: String, required: false, default: ""},
    contactNumber : {type: String, required: false, default: ""},
    subject : {type: String, required: false, default: ""},
    message : {type: String, required: false, default: ""},
    imgUrl : {type: String, required: false, default: ""},
})

const Feedback = mongoose.model("Feedback" , feedbackModelSchema);

export {
    Feedback
}