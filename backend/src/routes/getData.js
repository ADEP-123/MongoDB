import { Router } from "express";
import { getAllActiveRentsAndClientsController, getAllFreeVehiclesController, getBookinsController, getClientsController, getEmployeController, getRentController, getSucursalController, getVehiclesController, getVehiclesOnSucursalController } from "../controllers/getDataController.js";
import { middlewareRateLimit } from "../middleware/limit.js";
import { middlewareContentLength } from "../middleware/contentLength.js";

const getInitRoute = () => {
    const router = Router()
    router.get("/sucursal", middlewareRateLimit, middlewareContentLength, getSucursalController);
    router.get("/cliente", middlewareRateLimit, middlewareContentLength, getClientsController);
    router.get("/sucursal_automovil/vehicLibre", middlewareRateLimit, middlewareContentLength, getAllFreeVehiclesController);
    router.get("/alquilerActivo", middlewareRateLimit, middlewareContentLength, getAllActiveRentsAndClientsController);
    router.get("/reserva", middlewareRateLimit, middlewareContentLength, getBookinsController);
    router.get("/alquiler", middlewareRateLimit, middlewareContentLength, getRentController);
    router.get("/empleado", middlewareRateLimit, middlewareContentLength, getEmployeController);
    router.get("/vehiculosEnSucursal", middlewareRateLimit, middlewareContentLength, getVehiclesOnSucursalController);
    router.get("/automovil", middlewareRateLimit, middlewareContentLength, getVehiclesController);


    return router;
};


export default getInitRoute