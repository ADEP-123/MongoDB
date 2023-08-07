import collectionGen from "../utils/db.js";
class Empleado {
    _id;
    ID_Empleado;
    Nombre;
    Apellido;
    DNI;
    Direccion;
    Telefono;
    Cargo;
    constructor(ID, name, lastname, document, address, phone, rol) {
        this._id = ID;
        this.ID_Cliente = name;
        this.Nombre = lastname;
        this.Apellido = document;
        this.DNI = address;
        this.Direccion = phone;
        this.Cargo = rol;
    }
    async getSeller() {
        try {
            const coleccion = await collectionGen("empleado");
            //console.log("Coleccion: ", coleccion);

            const pipeline = [
                {
                    $match: {
                        Cargo: "Vendedor"
                    }
                },
                {
                    $project: {
                        ID: "$ID_Empleado",
                        Name: "$Nombre",
                        Lastname: "$Apellido",
                        Document: "$DNI",
                        Address: "$Direccion",
                        Phone: "$Telefono",
                        Rol: "$Cargo", 
                        _id: 0
                    }
                }
            ];
            return coleccion.aggregate(pipeline).toArray();
        } catch (error) {
            throw error;
        }
    }

    async getManagerOrAssistant() {
        try {
            const coleccion = await collectionGen("empleado");
            //console.log("Coleccion: ", coleccion);

            const pipeline = [
                {
                    $match: {
                        Cargo: { $in: ["Gerente", "Asistente"] }
                    }
                },
                {
                    $group: {
                        _id: null,
                        Managers: {
                            $push: {
                                $cond: [
                                    { $eq: ["$Cargo", "Gerente"] },
                                    {
                                        ID: "$ID_Empleado",
                                        Name: "$Nombre",
                                        Lastname: "$Apellido",
                                        Document: "$DNI",
                                        Address: "$Direccion",
                                        Phone: "$Telefono"
                                    },
                                    null
                                ]
                            }
                        },
                        Assistants: {
                            $push: {
                                $cond: [
                                    { $eq: ["$Cargo", "Asistente"] },
                                    {
                                        ID: "$ID_Empleado",
                                        Name: "$Nombre",
                                        Lastname: "$Apellido",
                                        Document: "$DNI",
                                        Address: "$Direccion",
                                        Phone: "$Telefono"
                                    },
                                    null
                                ]
                            }
                        }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        Managers: {
                            $filter: {
                                input: "$Managers",
                                as: "manager",
                                cond: { $ne: ["$$manager", null] }
                            }
                        },
                        Assistants: {
                            $filter: {
                                input: "$Assistants",
                                as: "assistant",
                                cond: { $ne: ["$$assistant", null] }
                            }
                        }
                    }
                }
            ];
            return coleccion.aggregate(pipeline).toArray();
        } catch (error) {
            throw error;
        }
    }
}

export default Empleado;