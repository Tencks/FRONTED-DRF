import { Data } from "popper.js";

export interface LoadMedicamentoI{
    residenteM:string;
    genericMedicamento:string;
    nombreMedicamento:string;
    marcaMedicamento:string;
    pesoMedicamento:string;
    cantDisponible:string;
    medicionMedicamento:string;
    fechaIngreso:Data;
    fechaCaducidad:Data;
    codMedicamento:string;
    observacionesMedicamento:string;
    derivacionesMedicamento:string;

};