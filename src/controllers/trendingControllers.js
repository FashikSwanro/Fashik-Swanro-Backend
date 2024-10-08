import { Trending } from "../models/trendingModels";


const addTrending = async (req, res) => {
    try {
        const { imgUriList , type } = req.body
        if ( !( imgUriList && type ) ){
            res.status(400).send({ message: "All Inputs are Required" })
        }
        const deleteRes = await Trending.deleteMany({type : type})
        const trending = new Trending(req.body);
        const response = await trending.save();
        res.status(200).send({response , deleteRes});
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Add Trending"  : ${error}` });
    }
}

const getTrending = async( req , res ) => {
    try {
        const response = await Trending.find({});
        res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Find Trending"  : ${error}` });
    }
}

export{
    addTrending ,
    getTrending
}