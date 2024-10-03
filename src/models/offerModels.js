import mongoose from "mongoose";

const offerModelSchema = new mongoose.Schema({
    imgUriList : {type: [String], required: true, default: []}
})

const Offer = mongoose.model("Offer" , offerModelSchema);

export {
    Offer
}