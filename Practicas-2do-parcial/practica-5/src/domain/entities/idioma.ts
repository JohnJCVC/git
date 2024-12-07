



export class IdiomaEntity {

    constructor(
        public id: number,
        public descripcion: number,
    ){}


    public static fromObject ( object: {[key: string]: any}): IdiomaEntity {
        const { id, descripcion, nivel_minimo, nivel_maximo } = object;
        if( !id ) throw 'La propieda id es requerido'
        if ( !descripcion ) throw 'La descripcion es requerida'

        return new IdiomaEntity(id, descripcion)
        
    }

}