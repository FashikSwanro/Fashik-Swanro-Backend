import { addStore, getAllStores } from "../controllers/storeControllers";

const storeRouter = express.Router();

// post routers
storeRouter.post("/add" , addStore);

// get routers
storeRouter.get("/get" , getAllStores);


export default storeRouter;