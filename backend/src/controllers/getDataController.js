import { getAllActiveRentsAndClientsService, getAllBookinsService, getAllClientsService, getAllFreeVehiclesService, getAllSucursalService, getClientByDocumentService, getRentBydIdService, getRentValueService, getSellerService, getVehiclesMore5PeopleService, getVehiclesOnSucursalService } from "../services/getServices.js";

const getSucursalController = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        const result = await getAllSucursalService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const getClientsController = async (req, res, next) => {
    if (!req.rateLimit) return;
    const { document } = req.query
    try {
        let result;
        if (document) {
            result = await getClientByDocumentService(document);
        } else {
            result = await getAllClientsService();
        }
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

const getRentController = async (req, res, next) => {
    if (!req.rateLimit) return;

    try {
        let result;
        if (cost) {
            switch (cost) {
                case "true":
                    result = await getRentValueService(Number(id))
                    break;

                case "false":
                    result = await getRentBydIdService(Number(id))
                    break;
            }
        } else {
            result = await getRentBydIdService(Number(id));
        }
        if (cost != "true" && cost != "false") {
            res.status(400).json({ message: "El tipo de dato ingresado al costo es incorrecto" });
        } else {
            res.status(200).json({ message: `Se han encontrado ${result.length} resultados`, result });
        }

    } catch (error) {
        res.status(500).json(error);
    }
};

const getEmployeController = async (req, res, next) => {
    if (!req.rateLimit) return;
    const { Cargo } = req.query
    try {
        let result;
        if (Cargo == "Vendedor") {
            result = await getSellerService();
        }
        res.status(200).json({ message: `Se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error);
    }
};

const getVehiclesOnSucursalController = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        const result = await getVehiclesOnSucursalService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const getVehiclesController = async (req, res, next) => {
    if (!req.rateLimit) return;
    const { Capacidad } = req.query
    try {
        let result;
        if (Capacidad == 5) {
            result = await getVehiclesMore5PeopleService();
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    getSucursalController,
    getClientsController,
    getAllFreeVehiclesController,
    getAllActiveRentsAndClientsController,
    getBookinsController,
    getRentController,
    getEmployeController,
    getVehiclesOnSucursalController,
    getVehiclesController
}