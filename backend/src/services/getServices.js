import Cliente from "../entities/cliente.js";
import Sucursal_Automovil from "../entities/sucursal_automovil.js";
import Sucursal from "../entities/surcursal.js";

const getAllSucursalService = async (id) => {
    const sucursal = new Sucursal(id)
    const result = await sucursal.getAllSucursal()
    return result;
};

const getAllClientsService = async () => {
    const cliente = new Cliente();
    const result = await cliente.getAllCLients();
    return result;
};

const getAllFreeVehiclesService = async () => {
    const sucursal_automovil = new Sucursal_Automovil();
    const result = await sucursal_automovil.getAllFreeVehicles();
    return result;
};

export {
    getAllSucursalService,
    getAllClientsService,
    getAllFreeVehiclesService
}