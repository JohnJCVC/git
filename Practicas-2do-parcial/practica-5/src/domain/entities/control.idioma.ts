import { Estudiante } from "../../data/models/Estudiante";
import { Idioma } from "../../data/models/Idioma";
import { IdiomaEntity } from "./idioma";

export class ControlIdiomaEntity {

    constructor(
        public idEstudiante: number,
        public idIdioma: number,
        public porcentajeLectura: number,
        public porcentajeEscritura: number,
        public porcentajeEscucharHablar: number,

    ) { }

    public static fromObject(object: { [key: string]: any }): ControlIdiomaEntity {
        const { id, idEstudiante, idIdioma, porcentajeLectura, porcentajeEscritura, porcentajeEscucharHablar } = object;

        if (!id) throw 'La propiedad id es requerido';
        if (!idEstudiante) throw 'La propiedad id_estudante es requerido';
        if (!idIdioma) throw 'La propuedad id_idioma es requerido';
        if (!porcentajeLectura) throw 'La propiedad porcentajeLectura es requerido';
        if (!porcentajeEscritura) throw 'La propiedad porcentajeEscritura es requerido';
        if (!porcentajeEscucharHablar) throw 'La propiedad porentajeEscuchaHablar es requerida';


        return new ControlIdiomaEntity( 
            idEstudiante,
            idIdioma,
            porcentajeLectura,
            porcentajeEscritura,
            porcentajeEscucharHablar
        )
    }

}