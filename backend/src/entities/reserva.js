import collectionGen from "../utils/db.js";
class Reserva {
    _id;
    ID_Reserva;
    cliente_id;
    automovil_id;
    Fecha_Reserva;
    Fecha_Inicio;
    Fecha_Fin;
    Estado;
    constructor(ID, clientID, vehicleId, bookingDate, startingDate, finalDate, status) {
        this.ID_Reserva = ID;
        this.cliente_id = clientID;
        this.automovil_id = vehicleId;
        this.Fecha_Reserva = bookingDate;
        this.Fecha_Inicio = startingDate;
        this.Fecha_Fin = finalDate;
        this.Estado = status;
    }

    async getAllBookins() {
        try {
            const coleccion = await collectionGen("reserva");
            //console.log("Coleccion: ", coleccion);
            return coleccion.aggregate([
                { $match: { Estado: "Pendiente" } },
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
                    $lookup: {
                        from: "automovil",
                        localField: "automovil_id",
                        foreignField: "ID_Automovil",
                        as: "automovil_info"
                    }
                },
                {
                    $unwind: "$automovil_info"
                },
                {
                    $group: {
                        _id: "$cliente_id",
                        cliente_info: { $first: "$cliente_info" },
                        reserva_info: {
                            $push: {
                                "ID": "$ID_Reserva",
                                "Booking": "$Fecha_Reserva",
                                "Start": "$Fecha_Inicio",
                                "End": "$Fecha_Fin",
                                "Status": "$Estado",
                                "Brand": "$automovil_info.Marca",
                                "Model": "$automovil_info.Modelo",
                                "Year": "$automovil_info.Anio"
                            }
                        }
                    }
                },
                {
                    $project: {
                        "_id": 0,
                        "cliente_info": {
                            "Document": "$cliente_info.DNI",
                            "Name": "$cliente_info.Nombre",
                            "Lastname": "$cliente_info.Apellido"
                        },
                        "reserva_info": 1,
                    }
                }
            ]).toArray();
        } catch (error) {
            throw error;
        }
    }

    async getBookinsByClient(cliendId) {
        try {
            const coleccion = await collectionGen("reserva");
            //console.log("Coleccion: ", coleccion);
            return coleccion.aggregate([
                { $match: { Estado: "Pendiente", cliente_id: cliendId } },
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
                        reserva_info: {
                            $push: {
                                "ID": "$ID_Reserva",
                                "Booking": "$Fecha_Reserva",
                                "Start": "$Fecha_Inicio",
                                "End": "$Fecha_Fin",
                                "Status": "$Estado"
                            }
                        }
                    }
                },
                {
                    $project: {
                        "_id": 0,
                        "cliente_info": {
                            "Document": "$cliente_info.DNI",
                            "Name": "$cliente_info.Nombre",
                            "Lastname": "$cliente_info.Apellido"
                        },
                        "reserva_info": 1,
                    }
                }
            ]).toArray();
        } catch (error) {
            throw error;
        }
    }

    async getClientInfoByBookingID(ID) {
        try {
            const coleccion = await collectionGen("reserva");
            //console.log("Coleccion: ", coleccion);
            return coleccion.aggregate([
                { $match: { ID_Reserva: ID } },
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
                    $project: {
                        "_id": 0,
                        "cliente_info": {
                            "Document": "$cliente_info.DNI",
                            "Name": "$cliente_info.Nombre",
                            "Lastname": "$cliente_info.Apellido"
                        },
                        "reserva_info": {
                            "ID": "$ID_Reserva",
                            "BookingDate": "$Fecha_Reserva",
                            "Start": "$Fecha_Inicio",
                            "End": "$Fecha_Fin",
                            "Status": "$Estado"
                        }
                    }
                }
            ]).toArray();
        } catch (error) {
            throw error;
        }
    }

}
export default Reserva;