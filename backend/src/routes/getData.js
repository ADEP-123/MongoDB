import { Router } from "express";
import { getAllFreeVehiclesController, getClientsController, getSucursalController } from "../controllers/getDataController.js";
import { configGet } from "../middleware/limit.js";

const getInitRoute = () => {
    const router = Router()
    router.get("/sucursal", configGet(), getSucursalController);
    router.get("/cliente", configGet(), getClientsController);
    router.get("/sucursal_automovil/vehicLibre", configGet(), getAllFreeVehiclesController);

    return router;
};


export default getInitRoute