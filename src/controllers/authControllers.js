import { User } from "../models/userModels";
import jwt from "jsonwebtoken"
import twilio from "twilio"
import { countryCode, expiry_duration, sms_text } from "../constants/Constants";

const getToken = async (req, res) => {
    try {
        const { phoneNumber } = req.body

        let userDB = await User.findOne({ phoneNumber: phoneNumber });
        if (!userDB) {
            res.status(400).send({ message: "No User Exists with this Number" })
        }

        const payload = { user: { _id: userDB._id, email: userDB.email, phoneNumber: userDB.phoneNumber } };
        const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: expiry_duration });
        userDB.token = token

        const updateToken = await User.updateOne({ _id: userDB._id }, {
            $set: {
                token: userDB.token
            }
        })

        return res.status(200).send(userDB);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Login User"  : ${error}` });
    }
}

const createUserProfile = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, dob, gender } = req.body

        let user = await User.findOne(
            { phoneNumber: phoneNumber }
        )
        console.log(user);
        if (user) {
            return res.status(400).send({ message: "User Already Exists" });
        }

        user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            dob: dob,
            phoneNumber: phoneNumber,
            gender: gender
        });

        const userDB = await user.save();
        const payload = { user: { _id: userDB._id, email: userDB.email, phoneNumber: userDB.phoneNumber } };
        const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: expiry_duration });
        userDB.token = token

        const updateToken = await User.updateOne({ _id: userDB._id }, {
            $set: {
                token: userDB.token
            }
        })
        return res.status(200).send(userDB);
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Register User"  : ${error}` });
    }
}

const userProfile = async (req, res) => {
    try {
        const _id = req.body._id;
        const user = await User.findById(_id);
        if (!user) {
            res.status(400).send({ message: "No User Exists" })
        }

        res.status(200).send(user)
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Get User Profile"  : ${error}` });
    }
}

const editProfile = async (req, res) => {
    try {
        const { _id, firstName, lastName, email , billingAddress } = req.body;
        const user = await User.findById(_id);
        if (!user) {
            res.status(400).send({ message: "No Such User Exists" })
        }
        
        if (firstName && lastName && email) {
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
        }

        if (billingAddress && typeof billingAddress === 'object') {
            user.billingAddress = billingAddress;
        }

        await user.save();

        res.status(200).send(user)
    }
    catch (error) {
        return res.status(500).send({ message: `"Failed to Get User Profile"  : ${error}` });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (users.length == 0) {
            res.status(400).send({ message: "No User Present" })
        }

        res.status(200).send(users);
    } catch (error) {
        return res.status(400).send({ message: `"Failed to Get Users"  : ${error}` });
    }
}

const sendOtp = async (req, res) => {
    try {
        const { phoneNumber } = req.body
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        const response = await client.verify.v2.services(process.env.TWILIO_SERVICE_SID)
            .verifications.create({ channel: sms_text, to: countryCode + phoneNumber });
        res.status(200).send({ message: `OTP send successfully`, response: response })
    } catch (error) {
        return res.status(400).send({ message: `"Failed to Send Otp"  : ${error}` });
    }
}

const verifyOtp = async (req, res) => {
    try {
        const { phoneNumber, code } = req.body
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        const verificationCheck = await client.verify.v2
            .services(process.env.TWILIO_SERVICE_SID)
            .verificationChecks.create({
                code: code,
                to: countryCode + phoneNumber,
            });
        res.status(200).send({ message: `OTP verified successfully`, response: verificationCheck })
    } catch (error) {
        return res.status(400).send({ message: `"Failed to Verify Otp"  : ${error}` });
    }
}

export {
    getToken,
    createUserProfile,
    userProfile,
    sendOtp,
    verifyOtp,
    getAllUsers,
    editProfile
}