import collectionGen from "../utils/db.js";
class Sucursal {
    _id;
    ID_Sucursal;
    Nombre;
    Direccion;
    Telefono;
    constructor(id, idSucursal, Name, Address, Phone) {
        this._id = id;
        this.ID_Sucursal = idSucursal;
        this.Nombre = Name;
        this.Direccion = Address;
        this.Telefono = Phone;
    }

    async getAllSucursal() {
        try {
            const coleccion = await collectionGen("sucursal");

            return coleccion.find().toArray();
        } catch (error) {
            throw error;
        }
    }

    async getVehiclesOnSucursal() {
        try {
            const coleccion = await collectionGen("sucursal");
            return coleccion.aggregate([
                {
                    $lookup: {
                        from: "sucursal_automovil",
                        localField: "ID_Sucursal",
                        foreignField: "sucursal_id",
                        as: "automoviles"
                    }
                },
                {
                    $unwind: "$automoviles"
                },
                {
                    $group: {
                        _id: "$ID_Sucursal",
                        Name: { $first: "$Nombre" },
                        Address: { $first: "$Direccion" },
                        Phone: { $first: "$Telefono" },
                        Cantidad_Disponible: { $sum: "$automoviles.Cantidad_Disponible" }
                    }
                },
                {
                    $project: {
                        "_id": 0,
                        "ID": "$_id",
                        "Cantidad_Disponible": 1
                    }
                }
            ]).toArray();
        } catch (error) {
            throw error;
        }
    }

    async getVehiclesOnSucursalAndAddress() {
        try {
            const coleccion = await collectionGen("sucursal");
            return coleccion.aggregate([
                {
                    $lookup: {
                        from: "sucursal_automovil",
                        localField: "ID_Sucursal",
                        foreignField: "sucursal_id",
                        as: "automoviles"
                    }
                },
                {
                    $unwind: "$automoviles"
                },
                {
                    $group: {
                        _id: "$ID_Sucursal",
                        Name: { $first: "$Nombre" },
                        Address: { $first: "$Direccion" },
                        Phone: { $first: "$Telefono" },
                        Cantidad_Disponible: { $sum: "$automoviles.Cantidad_Disponible" }
                    }
                },
                {
                    $project: {
                        "_id": 0,
                        "ID": "$_id",
                        "Name": 1,
                        "Address": 1,
                        "Phone": 1,
                        "Cantidad_Disponible": 1
                    }
                }
            ]).toArray();
        } catch (error) {
            throw error;
        }
    }

}
export default Sucursal;