import { Trending } from "../models/trendingModels";


const addTrending = async (req, res) => {
    try {
        const { categoriesImgUriList , slider1ImgUriList , slider2ImgUriList } = req.body
        if ( !( categoriesImgUriList , slider1ImgUriList , slider2ImgUriList ) ){
            res.status(400).send({ message: "All Inputs are Required" })
        }
        const deleteRes = await Trending.deleteMany({})
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
        const response = await Trending.findOne({});
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