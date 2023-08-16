import { Router } from "express";
import { getAllActiveRentsAndClientsController, getAllFreeVehiclesController, getBookinsController, getClientsController, getEmployeController, getRentController, getSucursalController, getVehiclesController, getVehiclesOnSucursalController } from "../controllers/getDataController.js";
import { middlewareContentLength } from "../middleware/contentLength.js";
import { contentMiddlewareAlquiler } from "../middleware/contentMiddleware.js";

const getInitRoute = () => {
    const router = Router()
    router.get("/sucursal", middlewareContentLength, getSucursalController);
    router.get("/cliente", middlewareContentLength, getClientsController);
    router.get("/sucursal_automovil/vehicLibre", middlewareContentLength, getAllFreeVehiclesController);
    router.get("/alquilerActivo", middlewareContentLength, getAllActiveRentsAndClientsController);
    router.get("/reserva", middlewareContentLength, getBookinsController);
    router.get("/alquiler", middlewareContentLength,contentMiddlewareAlquiler, getRentController);
    router.get("/empleado", middlewareContentLength, getEmployeController);
    router.get("/vehiculosEnSucursal", middlewareContentLength, getVehiclesOnSucursalController);
    router.get("/automovil", middlewareContentLength, getVehiclesController);


    return router;
};


export default getInitRoute