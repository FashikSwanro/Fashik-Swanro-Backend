import { Offer } from "../models/offerModels";

const addOffer = async (req, res) => {
    try {
        const { imgUriList } = req.body
        if ( !( imgUriList ) ){
            res.status(400).send({ message: "All Inputs are Required" })
        }
        const deleteRes = await Offer.deleteMany({})
        const offer = new Offer(req.body);
        const response = await offer.save();
        res.status(200).send({response , deleteRes});
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Add Offer"  : ${error}` });
    }
}

const getOffers = async( req , res ) => {
    try {
        const response = await Offer.findOne({});
        res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Find Offer"  : ${error}` });
    }
}

export{
    addOffer ,
    getOffers
}