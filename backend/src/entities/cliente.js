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
    constructor(ID, name, lastname, document, address, phone, email) {
        this.ID_Cliente = ID;
        this.Nombre = name;
        this.Apellido = lastname;
        this. DNI = document;
        this. Direccion = address;
        this. Telefono = phone;
        this. Email = email;
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

    async getClientByDocument(document) {
        try {
            const coleccion = await collectionGen("cliente");
            //console.log("Coleccion: ", coleccion);
    
            const pipeline = [
                {
                    $match: {
                        DNI: document
                    }
                },
                {
                    $project: {
                        ID: "$ID_Cliente",
                        Name: "$Nombre",
                        LastName: "$Apellido",
                        "_id": 0 
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