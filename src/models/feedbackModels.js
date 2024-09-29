import mongoose from "mongoose";

const feedbackModelSchema = new mongoose.Schema({
    name : {type: String, required: true, default: ""},
    email : {type: String, required: true, default: ""},
    contactNumber : {type: String, required: true, default: ""},
    subject : {type: String, required: true, default: ""},
    message : {type: String, required: true, default: ""},
    imgUrl : {type: String, required: false, default: ""},
})

const Feedback = mongoose.model("Feedback" , feedbackModelSchema);

export {
    Feedback
}