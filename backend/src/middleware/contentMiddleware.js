import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import { AlquilerDTO } from '../routes/dto/js/alquilerDTO.js';
import { EmpleadoDTO } from '../routes/dto/js/empleadoDTO.js';
import { ClienteDTO } from '../routes/dto/js/clientDTO.js';
import { AutomovilDTO } from '../routes/dto/js/automovilDTO.js';
import { ReservaDTO } from '../routes/dto/js/reservaDTO.js';

const contentMiddlewareAlquiler = (req, res, next) => {
    if (!req.rateLimit) return;
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    console.log("payload: ", payload);
    let Clone = JSON.stringify(classToPlain(plainToClass(AlquilerDTO, {}, { ignoreDecorators: true })));
    console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
};

const contentMiddlewareEmpleado = (req, res, next) => {
    if (!req.rateLimit) return;
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    console.log("payload: ", payload);
    let Clone = JSON.stringify(classToPlain(plainToClass(EmpleadoDTO, {}, { ignoreDecorators: true })));
    console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
};

const contentMiddlewareCliente = (req, res, next) => {
    if (!req.rateLimit) return;
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    console.log("payload: ", payload);
    let Clone = JSON.stringify(classToPlain(plainToClass(ClienteDTO, {}, { ignoreDecorators: true })));
    console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
};

const contentMiddlewareAutomovil = (req, res, next) => {
    if (!req.rateLimit) return;
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    console.log("payload: ", payload);
    let Clone = JSON.stringify(classToPlain(plainToClass(AutomovilDTO, {}, { ignoreDecorators: true })));
    console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
};

const contentMiddlewareReserva = (req, res, next) => {
    if (!req.rateLimit) return;
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    console.log("payload: ", payload);
    let Clone = JSON.stringify(classToPlain(plainToClass(ReservaDTO, {}, { ignoreDecorators: true })));
    console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
};


export {
    contentMiddlewareAlquiler,
    contentMiddlewareEmpleado,
    contentMiddlewareCliente,
    contentMiddlewareAutomovil,
    contentMiddlewareReserva
}