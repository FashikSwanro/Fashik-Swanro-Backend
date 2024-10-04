import mongoose from "mongoose";


const styleModelSchema = new mongoose.Schema({
    name : {type: String, required: false, default: ""},
    description : {type: String, required: false, default: ""},
    price : {type: String, required: false, default: ""},
    imgUrl : {type: String, required: false, default: ""},
})

const fabricModelSchema = new mongoose.Schema({
    name : {type: String, required: false, default: ""},
    description : {type: String, required: false, default: ""},
    price : {type: String, required: false, default: ""},
    imgUrl : {type: String, required: false, default: ""},
})

const designModelSchema = new mongoose.Schema({
    name : {type: String, required: false, default: ""},
    description : {type: String, required: false, default: ""},
    price : {type: String, required: false, default: ""},
    imgUrl : {type: String, required: false, default: ""},
    handPaint : {type: String, required: false, default: ""},
    fabricUsed : {type: String, required: false, default: ""},
})

const colorModelSchema = new mongoose.Schema({
    name : {type: String, required: false, default: ""},
    description : {type: String, required: false, default: ""},
    price : {type: String, required: false, default: ""},
    imgUrl : {type: String, required: false, default: ""},
    handPaint : {type: String, required: false, default: ""},
    fabricUsed : {type: String, required: false, default: ""},
})

const materialInfoModelSchema = new mongoose.Schema({
    stylesList : {type: [styleModelSchema], required: false, default: []},
    fabricsList : {type: [fabricModelSchema], required: false, default: []},
    colorsList : {type: [colorModelSchema], required: false, default: []},
    designsList : {type: [designModelSchema], required: false, default: []},
})

const MaterialInfo = mongoose.model("MaterialInfo" , materialInfoModelSchema);

export {
    MaterialInfo
}