import express from 'express';


const materialInfoRouter = express.Router();

// post routers
materialInfoRouter.post("/add" , materialInfoRouter);

// get routers
materialInfoRouter.get("/getAll" , materialInfoRouter);


export default materialInfoRouter;