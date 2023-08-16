var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class AlquilerDTO {
    constructor(data) {
        Object.assign(this, data);
        this.ID_Alquiler = 1;
        this.cost = "false";
        this.Fecha_Inicio = "2023-07-24";
        this.amount = "false";
        this.Fecha_Fin = "2023-08-06";
    }
}
__decorate([
    Expose({ name: "id" }),
    Transform(({ value, key }) => { }, { toClassOnly: true }),
    __metadata("design:type", Number)
], AlquilerDTO.prototype, "ID_Alquiler", void 0);
__decorate([
    Expose({ name: "cost" }),
    Transform(({ value, key }) => { }, { toClassOnly: true }),
    __metadata("design:type", String)
], AlquilerDTO.prototype, "cost", void 0);
__decorate([
    Expose({ name: "startingDate" }),
    Transform(({ value, key }) => { }, { toClassOnly: true }),
    __metadata("design:type", String)
], AlquilerDTO.prototype, "Fecha_Inicio", void 0);
__decorate([
    Expose({ name: "amount" }),
    Transform(({ value, key }) => { }, { toClassOnly: true }),
    __metadata("design:type", String)
], AlquilerDTO.prototype, "amount", void 0);
__decorate([
    Expose({ name: "finalDate" }),
    Transform(({ value, key }) => { }, { toClassOnly: true }),
    __metadata("design:type", String)
], AlquilerDTO.prototype, "Fecha_Fin", void 0);
