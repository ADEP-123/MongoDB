import { connection } from "../../db/atlas.js";
const getAllSucursalService = async (id) => {
    const db = await connection();
    const coleccion = db.collection("sucursal");
    const result = await coleccion.find().toArray();
    return result;
};
export {
    getAllSucursalService
}