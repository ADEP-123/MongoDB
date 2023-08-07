import { getAllActiveRentsAndClientsService, getAllBookinsService, getAllClientsService, getAllFreeVehiclesService, getAllSucursalService } from "../services/getServices.js";

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

const getClientsController = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        const result = await getAllClientsService();
        res.status(200).json({ message: `Se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error);
    }
};


const getAllFreeVehiclesController = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        const result = await getAllFreeVehiclesService();
        res.status(200).json({ message: `Se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAllActiveRentsAndClientsController = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        const result = await getAllActiveRentsAndClientsService();
        res.status(200).json({ message: `Se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error);
    }
};


const getBookinsController = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        const result = await getAllBookinsService();
        res.status(200).json({ message: `Se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    getSucursalController,
    getClientsController,
    getAllFreeVehiclesController,
    getAllActiveRentsAndClientsController,
    getBookinsController
}