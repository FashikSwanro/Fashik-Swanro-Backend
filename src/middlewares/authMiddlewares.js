import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_TOKEN);
            req.user = decoded;
        } catch (err) {
            return res.status(401).send("Invalid Token");
        }
        return next();
    } catch (error) {
        return res.status(500).send({ message: `"Failed to Verify Token"  : ${error}` });
    }
}

export {
    verifyToken
}