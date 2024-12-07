



export class UpdateEstudianteDto {
    
    private constructor(
        public readonly id: number,
        public readonly nombre: string,
        public readonly identificacion: number,
    ){}


    get values() {

        const returnObj: {[key: string]: any} = {};

        if ( this.nombre ) returnObj.nombre = this.nombre
        if ( this.identificacion ) returnObj.identificacion = this.identificacion

         
        return returnObj;
    }

    static update(props: {[key: string]: any}): [string?, UpdateEstudianteDto?] {
        const { id, nombre, identificacion } = props;

        if (!id || isNaN( Number(id))) 
            return ['La propiedad id debe ser un numero valido', undefined];


        return [undefined, new UpdateEstudianteDto(id, nombre, identificacion)]
    }
}