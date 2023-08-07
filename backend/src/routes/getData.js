import { Router } from "express";
import { getAllActiveRentsAndClientsController, getAllFreeVehiclesController, getBookinsController, getClientsController, getSucursalController } from "../controllers/getDataController.js";
import { configGet } from "../middleware/limit.js";

const getInitRoute = () => {
    const router = Router()
    router.get("/sucursal", configGet(), getSucursalController);
    router.get("/cliente", configGet(), getClientsController);
    router.get("/sucursal_automovil/vehicLibre", configGet(), getAllFreeVehiclesController);
    router.get("/alquilerActivo", configGet(), getAllActiveRentsAndClientsController);
    router.get("/reserva", configGet(), getBookinsController);

    return router;
};


export default getInitRoute