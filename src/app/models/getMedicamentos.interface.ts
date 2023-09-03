export interface listaMedicamentosI{
   
    medicamentos: 
    {
        Generico: string;
        Nombre: string;
        Marca: string;
        Peso: string;
        CantDisponible: number;
        Medida: string;
        FechaIngreso: string;
        FechaCaducidad: string;
        Codigo: string;
        Observaciones: string;
        Derivaciones: string;
      }[];
   
}


//#  
  //this.api.getMedicamentos().subscribe(medicamentosData => {
   // this.Medicamentos = medicamentosData.medicamentos;
  //  console.log(this.Medicamentos, 'como va?');
 // });
//#