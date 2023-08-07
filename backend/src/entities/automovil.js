import collectionGen from "../utils/db.js";
class Automovil {
    _id;
    ID_Automovil;
    Marca;
    Modelo;
    Anio;
    Tipo;
    Capacidad;
    Precio_Diario;
    constructor(ID, brand, model, year, type, capacity, dailyPrice) {
        this.ID_Automovil = ID;
        this.Marca = brand;
        this.Modelo = model;
        this.Anio = year;
        this.Tipo = type;
        this.Capacidad = capacity;
        this.Precio_Diari = dailyPrice;
    }

    async getVehicles5Persons() {
        try {
            const coleccion = await collectionGen("automovil");
            //console.log("Coleccion: ", coleccion);

            const pipeline = [
                {
                    $match: {
                        Capacidad: { $gt: 5 }
                    }
                },
                {
                    $project: {
                        ID: "$ID_Automovil",
                        Brand: "$Marca",
                        Model: "$Modelo",
                        Year: "$anio",
                        Type: "$Tipo",
                        Precio: "$Precio_Diario",
                        Capacity: "$Capacidad",
                        _id: 0
                    }
                }
            ];
            return coleccion.aggregate(pipeline).toArray();
        } catch (error) {
            throw error;
        }
    }

    async getAllVehiclesSorted() {
        try {
            const coleccion = await collectionGen("automovil");
            //console.log("Coleccion: ", coleccion);

            const pipeline = [
                {
                    $project: {
                        ID: "$ID_Automovil",
                        Brand: "$Marca",
                        Model: "$Modelo",
                        Year: "$anio",
                        Type: "$Tipo",
                        Precio: "$Precio_Diario",
                        _id: 0
                    }
                }
            ];
            return coleccion.aggregate(pipeline).sort({ Brand: 1, Model: 1 }).toArray();
        } catch (error) {
            throw error;
        }
    }

}
export default Automovil;