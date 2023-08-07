import Cliente from "../entities/cliente.js";
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

export {
    getAllSucursalService,
    getAllClientsService
}