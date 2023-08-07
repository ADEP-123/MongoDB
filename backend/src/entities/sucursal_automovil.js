import collectionGen from "../utils/db.js";
class Sucursal_Automovil {
    _id;
    sucursal_id;
    automovil_id;
    Cantidad_Disponible;
    constructor(id, sucursalId, vehicleId, Amount) {
        this._id = id;
        this.sucursal_id = sucursalId;
        this.automovil_id = vehicleId;
        this.Cantidad_Disponible = Amount;
    }

    async getAllFreeVehicles() {
        try {
            const coleccion = await collectionGen("sucursal_automovil");
            //console.log(coleccion);
            return coleccion.aggregate([
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
                    $lookup: {
                        from: "sucursal",
                        localField: "sucursal_id",
                        foreignField: "ID_Sucursal",
                        as: "sucursal_info"
                    }
                },
                {
                    $unwind: "$sucursal_info"
                },
                {
                    $project: {
                        _id: 0,
                        vehicleInfo: {
                            vehicleId: "$automovil_info.ID_Automovil",
                            Brand: "$automovil_info.Marca",
                            Model: "$automovil_info.Modelo",
                            Year: "$automovil_info.Anio",
                            Type: "$automovil_info.Tipo"
                        },
                        sucursalInfo: {
                            sucursalId: "$sucursal_info.ID_Sucursal",
                            sucursalName: "$sucursal_info.Nombre",
                            Amount: "$Cantidad_Disponible"
                        }
                    }
                }
            ]).toArray();
        } catch (error) {
            throw error;
        }
    }

}
export default Sucursal_Automovil;