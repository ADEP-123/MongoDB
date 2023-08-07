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

}
export default Alquiler;