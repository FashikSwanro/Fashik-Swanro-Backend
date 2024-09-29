import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import authRouter from "./routes/authRoutes";
import storeRouter from "./routes/storeRoutes";
import couponRouter from "./routes/couponRoutes";
import feedbackRouter from "./routes/feedbackRoutes";
dotenv.config();

const app = express();

// middle-where
app.use(express.json({ limit: "100mb", extended: true }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    w: "majority",
})
    .then((res) => console.log("Database connected!"))
    .catch((error) => console.log("Error while connecting DB: ", error));

//routes
app.use("/api/v1/auth" , authRouter);
app.use("/api/v1/stores" , storeRouter);
app.use("/api/v1/coupons" , couponRouter);
app.use("/api/v1/feedbacks" , feedbackRouter);

//start server
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log("Server is running: ", `localhost:${PORT}`);
});
