import express from 'express';
import { addMaterial, deleteMaterial, getMaterials } from '../controllers/materialInfoControllers';


const materialInfoRouter = express.Router();

// post routers
materialInfoRouter.post("/add" , addMaterial);

// get routers
materialInfoRouter.get("/getAll" , getMaterials);

// delete routers
materialInfoRouter.delete("/delete" , deleteMaterial);


export default materialInfoRouter;