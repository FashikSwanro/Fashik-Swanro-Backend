import express from 'express';
import { addMaterial, getMaterials } from '../controllers/materialInfoControllers';


const materialInfoRouter = express.Router();

// post routers
materialInfoRouter.post("/add" , addMaterial);

// get routers
materialInfoRouter.get("/getAll" , getMaterials);


export default materialInfoRouter;