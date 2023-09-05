export interface listaSemanalOI{
   
    signosVitales: 
    {
        FechaConsulta: Date;
        TensionArterial: string;
        Glucemia: string;
        Saturacion: string;
        Pulso: number;
        Observaciones: string;
        Derivaciones: string;
      }[];
   
}