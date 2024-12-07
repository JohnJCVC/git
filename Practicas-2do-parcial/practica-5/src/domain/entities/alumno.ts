



export class EstudianteEntity {
    
    
    constructor(
        public id:number,
        public nombre:string,
        public identificacion:number
    ){}

    public static fromObject( object: {[key: string]:any}): EstudianteEntity{
        const { id, nombre, identificacion } = object;
        if ( !id ) throw 'La propiedad id es requerido';
        if ( !nombre ) throw 'El nombre es requerido'
        if ( !identificacion ) throw 'La identificacion es requerida'

        return new EstudianteEntity(id, nombre, identificacion)

    }



}