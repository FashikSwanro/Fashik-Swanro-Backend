import { Feedback } from "../models/feedbackModels";

const addFeedback = async (req, res) => {
    try {
        const { name , email , contactNumber , subject , message } = req.body
        if ( !( name && email && contactNumber && subject && message ) ){
            res.status(400).send({ message: "All Inputs are Required" })
        }
        const feedback = new Feedback(req.body);
        const response = await feedback.save();
        res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Add Feedback"  : ${error}` });
    }
}

const getAllFeedbacks = async( req , res ) => {
    try {
        const response = await Feedback.find();
        res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Find Feedback"  : ${error}` });
    }
}

export{
    addFeedback ,
    getAllFeedbacks
}