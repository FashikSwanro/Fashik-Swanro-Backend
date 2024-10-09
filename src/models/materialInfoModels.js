import mongoose from "mongoose";

const materialInfoModelSchema = new mongoose.Schema({
    name : {type: String, required: false, default: ""},
    description : {type: String, required: false, default: ""},
    price : {type: String, required: false, default: ""},
    imgUrl : {type: String, required: false, default: ""},
    type : {type: String, required: false, default: ""} ,// style , design , color , fabric 
    handwork : {type: String, required: false, default: ""},
    fabricUsed : {type: String, required: false, default: ""},
})

const MaterialInfo = mongoose.model("MaterialInfo" , materialInfoModelSchema);

export {
    MaterialInfo
}