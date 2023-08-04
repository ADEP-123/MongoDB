import Sucursal from "../entities/surcursal.js";

const getAllSucursalService = async (id) => {
    const sucursal = new Sucursal(id)
    const result = await sucursal.getAllSucursal()
    return result;
};
export {
    getAllSucursalService
}