import { MaterialInfo } from "../models/materialInfoModels";

const addMaterial = async (req, res) => {
    try {
        const { name, description, price, imgUrl, type } = req.body
        if (!(name && description && price && imgUrl && type)) {
            res.status(400).send({ message: "All Inputs are Required" })
        }
        const material = new MaterialInfo(req.body);
        const response = await material.save();
        res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Add Material"  : ${error}` });
    }
}

const getMaterials = async (req, res) => {
    try {
        const response = await MaterialInfo.find({});
        res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Find Materials"  : ${error}` });
    }
}

const deleteMaterial = async (req, res) => {
    try {
        const { id } = req.query
        const deleteRes = await MaterialInfo.deleteOne({_id : id});
        res.status(200).send(deleteRes);
    } catch (error) {
        return res.status(500).send({ message: `"Failed to Find Material"  : ${error}` });
    }
}

export {
    addMaterial,
    getMaterials,
    deleteMaterial
}