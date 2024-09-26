import { Store } from "../models/storeModels"

const addStore = async (req, res) => {
    try {
        const { name ,email ,contactNumber ,address ,latitude ,longitude , zipCode } = req.body
        if ( !( name && email && contactNumber && address && latitude && longitude && zipCode ) ){
            res.status(400).send({ message: "All Inputs are Required" })
        }
        const store = new Store(req.body);
        const response = await store.save();
        res.status(200).send(response)
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Add Store"  : ${error}` });
    }
}

const getAllStores = async( req , res ) => {
    try {
        const response = await Store.find();
        res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Find Store"  : ${error}` });
    }
}

export {
    addStore,
    getAllStores
}