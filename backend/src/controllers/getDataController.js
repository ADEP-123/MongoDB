import { getAllSucursalService } from "../services/getServices.js";

const getSucursalController = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        const { id } = req.query
        const result = await getAllSucursalService(id);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};
export {
    getSucursalController
}