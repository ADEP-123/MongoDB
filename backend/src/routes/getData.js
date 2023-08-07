import { Router } from "express";
import { getAllActiveRentsAndClientsController, getAllFreeVehiclesController, getBookinsController, getClientsController, getEmployeController, getRentController, getSucursalController } from "../controllers/getDataController.js";
import { configGet } from "../middleware/limit.js";

const getInitRoute = () => {
    const router = Router()
    router.get("/sucursal", configGet(), getSucursalController);
    router.get("/cliente", configGet(), getClientsController);
    router.get("/sucursal_automovil/vehicLibre", configGet(), getAllFreeVehiclesController);
    router.get("/alquilerActivo", configGet(), getAllActiveRentsAndClientsController);
    router.get("/reserva", configGet(), getBookinsController);
    router.get("/alquiler", configGet(), getRentController);
    router.get("/empleado", configGet(), getEmployeController);

    return router;
};


export default getInitRoute