import collectionGen from "../utils/db.js";
class Alquiler {
    _id;
    ID_Alquiler;
    cliente_id;
    automovil_id;
    Fecha_Inicio;
    Fecha_Fin;
    Costo_Total;
    Estado;
    constructor(ID, clientID, vehicleID, startingDate, finalDate, totalCost, status) {
        this.ID_Alquiler = ID;
        this.cliente_id = clientID;
        this.automovil_id = vehicleID;
        this.Fecha_Inicio = startingDate;
        this.Fecha_Fin = finalDate;
        this.Costo_Total = totalCost;
        this.Estado = status;
    }

    async getRentBydId(id) {
        try {
            const coleccion = await collectionGen("alquiler");
            console.log("Coleccion: ", coleccion);

            const pipeline = [
                {
                    $match: {
                        ID_Alquiler: id
                    }
                },
                {
                    $project: {
                        ID: "$ID_Alquiler",
                        Client: "$cliente_id",
                        Vehicle: "$automovil_id",
                        Start: "$Fecha_Inicio",
                        End: "$Fecha_Fin",
                        Cost: "$Costo_Total",
                        Status: "$Estado",
                        _id: 0
                    }
                }
            ];
            return coleccion.aggregate(pipeline).toArray();
        } catch (error) {
            throw error;
        }
    }

    async getAllActiveRentsAndClients() {
        try {
            const coleccion = await collectionGen("alquiler");
            //console.log("Coleccion: ", coleccion);
            return coleccion.aggregate([
                { $match: { Estado: "Activo" } },
                {
                    $lookup: {
                        from: "cliente",
                        localField: "cliente_id",
                        foreignField: "ID_Cliente",
                        as: "cliente_info"
                    }
                },
                {
                    $unwind: "$cliente_info"
                },
                {
                    $group: {
                        _id: "$cliente_id",
                        cliente_info: { $first: "$cliente_info" },
                        Rents: {
                            $push: {
                                ID: "$ID_Alquiler",
                                startingDate: "$Fecha_Inicio",
                                finalDate: "$Fecha_Fin",
                                status: "$Estado"
                            }
                        }
                    }
                },
                {
                    $project: {
                        "_id": 0,
                        "client_info": {
                            Name: "$cliente_info.Nombre",
                            Lastname: "$cliente_info.Apellido",
                            Document: "$cliente_info.DNI"
                        },
                        "Rents": 1
                    }
                }
            ]).toArray();
        } catch (error) {
            throw error;
        }
    }

    async getRentValue(id) {
        try {
            const coleccion = await collectionGen("alquiler");
            const pipeline = [
                {
                    $match: {
                        ID_Alquiler: id
                    }
                },
                {
                    $project: {
                        ID: "$ID_Alquiler",
                        Costo: "$Costo_Total",
                        _id: 0
                    }
                }
            ];
            return coleccion.aggregate(pipeline).toArray();
        } catch (error) {
            throw error;
        }
    }

    async getRentsOnDate() {
        try {
            const coleccion = await collectionGen("alquiler");
            const pipeline = [
                {
                    $match: {
                        Fecha_Inicio: { $eq: '2023-09-01' }
                    }
                },
                {
                    $project: {
                        ID: "$ID_Alquiler",
                        Client: "$cliente_id",
                        Vehicle: "$automovil_id",
                        Start: "$Fecha_Inicio",
                        End: "$Fecha_Fin",
                        Cost: "$Costo_Total",
                        Status: "$Estado",
                        _id: 0
                    }
                }
            ];
            return coleccion.aggregate(pipeline).toArray();
        } catch (error) {
            throw error;
        }
    }

    async getClientsWhoRented() {
        try {
            const coleccion = await collectionGen("alquiler");
            // console.log("Coleccion: ", coleccion);
            return coleccion.aggregate([
                {
                    $lookup: {
                        from: "cliente",
                        localField: "cliente_id",
                        foreignField: "ID_Cliente",
                        as: "cliente_info"
                    }
                },
                {
                    $unwind: "$cliente_info"
                },
                {
                    $group: {
                        _id: "$cliente_id",
                        cliente_info: { $first: "$cliente_info" },
                        alquileres: {
                            $push: {
                                ID_Alquiler: "$ID_Alquiler",
                                Fecha_Inicio: "$Fecha_Inicio",
                                Fecha_Fin: "$Fecha_Fin",
                                Estado: "$Estado"
                            }
                        }
                    }
                },
                {
                    $project: {
                        "cliente_info": 1,
                        "totalAlquileres": { $size: "$alquileres" },
                    }
                },
                {
                    $match: {
                        "totalAlquileres": { $gte: 1 }
                    }
                }
            ]).toArray();
        } catch (error) {
            throw error;
        }
    }

    async getRentsAmount() {
        try {
            const coleccion = await collectionGen("alquiler");
            // console.log("Coleccion: ", coleccion);
            return coleccion.aggregate([
                {
                    $group: {
                        _id: null,
                        cantidad_registros: { $sum: 1 }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        cantidad_registros: 1
                    }
                }
            ]).toArray();
        } catch (error) {
            throw error;
        }
    }
}

export default Alquiler;