import mongoose from "mongoose";

const trendingModelSchema = new mongoose.Schema({
    categoriesImgUriList: { type: [String], required: false, default: [] },
    slider1ImgUriList: { type: [String], required: false, default: [] },
    slider2ImgUriList: { type: [String], required: false, default: [] }
})

const Trending = mongoose.model("Trending", trendingModelSchema);

export {
    Trending
}