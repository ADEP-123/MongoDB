import { Router } from "express";
import { getClientsController, getSucursalController } from "../controllers/getDataController.js";
import { configGet } from "../middleware/limit.js";

const getInitRoute = () => {
    const router = Router()
    router.get("/sucursal", configGet(), getSucursalController)
    router.get("/cliente", configGet(), getClientsController)
    return router;
};


export default getInitRoute