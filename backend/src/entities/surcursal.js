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
        console.log("s");
        try {
            const coleccion = await collectionGen("sucursal");
            console.log(coleccion);
            return coleccion.find().toArray();
        } catch (error) {
            throw error;
        }
    }

}
export default Sucursal;