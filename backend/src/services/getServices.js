import Alquiler from "../entities/alquiler.js";
import Automovil from "../entities/automovil.js";
import Cliente from "../entities/cliente.js";
import Empleado from "../entities/empleado.js";
import Reserva from "../entities/reserva.js";
import Sucursal_Automovil from "../entities/sucursal_automovil.js";
import Sucursal from "../entities/surcursal.js";

const getAllSucursalService = async () => {
    const sucursal = new Sucursal()
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

const getAllActiveRentsAndClientsService = async () => {
    const alquiler = new Alquiler();
    const result = await alquiler.getAllActiveRentsAndClients();
    return result;
};

const getAllBookinsService = async () => {
    const reserva = new Reserva();
    const result = await reserva.getAllBookins();
    return result;
};

const getRentBydIdService = async (id) => {
    const alquiler = new Alquiler();
    const result = await alquiler.getRentBydId(id);
    return result;
};

const getSellerService = async () => {
    const empleado = new Empleado();
    const result = await empleado.getSeller();
    return result;
};

const getVehiclesOnSucursalService = async () => {
    const sucursal = new Sucursal()
    const result = await sucursal.getVehiclesOnSucursal()
    return result;
};

const getVehiclesOnSucursalAndAddressService = async () => {
    const sucursal = new Sucursal()
    const result = await sucursal.getVehiclesOnSucursalAndAddress()
    return result;
};

const getRentValueService = async (id) => {
    const alquiler = new Alquiler()
    const result = await alquiler.getRentValue(id)
    return result;
};

const getClientByDocumentService = async (document) => {
    const cliente = new Cliente();
    const result = await cliente.getClientByDocument(document);
    return result;
};

const getVehiclesMore5PeopleService = async () => {
    const automovil = new Automovil();
    const result = await automovil.getVehicles5Persons();
    return result;
};

const getRentsOnDateService = async () => {
    const alquiler = new Alquiler();
    const result = await alquiler.getRentsOnDate();
    return result;
};

const getBookingsByClientID = async (clientId) => {
    const reserva = new Reserva();
    const result = await reserva.getBookinsByClient(clientId);
    return result;
};

const getManagerOrAssistantService = async () => {
    const empleado = new Empleado();
    const result = await empleado.getManagerOrAssistant();
    return result;
};

const getClientsWhoRentedService = async () => {
    const alquiler = new Alquiler();
    const result = await alquiler.getClientsWhoRented();
    return result;
};

const getAllVehiclesSortedService = async () => {
    const automovil = new Automovil();
    const result = await automovil.getAllVehiclesSorted();
    return result;
};

const getRentsAmountService = async () => {
    const alquiler = new Alquiler();
    const result = await alquiler.getRentsAmount();
    return result;
};

const getVehicles5PeopleAvailableService = async () => {
    const automovil = new Automovil();
    const result = await automovil.getVehicles5PeopleAvailable();
    return result;
};

const getClientInfoByBookingIDService = async (ID) => {
    const reserva = new Reserva();
    const result = await reserva.getClientInfoByBookingID(ID);
    return result;
};

export {
    getAllSucursalService,
    getAllClientsService,
    getAllFreeVehiclesService,
    getAllActiveRentsAndClientsService,
    getAllBookinsService,
    getRentBydIdService,
    getSellerService,
    getVehiclesOnSucursalService,
    getRentValueService,
    getClientByDocumentService,
    getVehiclesMore5PeopleService,
    getRentsOnDateService,
    getBookingsByClientID,
    getManagerOrAssistantService,
    getClientsWhoRentedService,
    getAllVehiclesSortedService,
    getVehiclesOnSucursalAndAddressService,
    getRentsAmountService,
    getVehicles5PeopleAvailableService,
    getClientInfoByBookingIDService
}