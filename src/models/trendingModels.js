import mongoose from "mongoose";

const trendingModelSchema = new mongoose.Schema({
    categoriesImgUriList: { type: [String], required: true, default: [] },
    slider1ImgUriList: { type: [String], required: true, default: [] },
    slider2ImgUriList: { type: [String], required: true, default: [] }
})

const Trending = mongoose.model("Trending", trendingModelSchema);

export {
    Trending
}