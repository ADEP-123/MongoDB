import collectionGen from "../utils/db.js";
class Cliente {
    _id;
    ID_Cliente;
    Nombre;
    Apellido;
    DNI;
    Direccion;
    Telefono;
    Email;
    constructor(ID, Name, Lastname) {
        this.ID_Cliente = ID;
        this.Nombre = Name;
        this.Apellido = Lastname;
    }

    // async getAllCLients() {
    //     try {
    //         const coleccion = await collectionGen("cliente");
    //         // console.log("Collecion: ", coleccion);
    //         return coleccion.find({}, { ID: "$ID_Cliente", Name: "$Nombre", LastName: "$Apellido", "_id": 0 }).toArray();
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    async getAllCLients() {
        try {
            const coleccion = await collectionGen("cliente");
            //console.log("Coleccion: ", coleccion);
    
            const pipeline = [
                {
                    $project: {
                        ID: "$ID_Cliente",
                        Name: "$Nombre",
                        LastName: "$Apellido",
                        _id: 0
                    }
                }
            ];
    
            return coleccion.aggregate(pipeline).toArray();
        } catch (error) {
            throw error;
        }
    }

}
export default Cliente;