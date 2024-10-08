import mongoose from "mongoose";

const trendingModelSchema = new mongoose.Schema({
    imgUriList : {type: [String], required: false, default: []},
    type : {type : String , required : false , default : ""} // category , slider 1 , slider 2
})

const Trending = mongoose.model("Trending", trendingModelSchema);

export {
    Trending
}