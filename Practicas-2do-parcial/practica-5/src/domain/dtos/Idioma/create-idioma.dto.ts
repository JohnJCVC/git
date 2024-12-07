



export class CreateIdiomaDto {
    private constructor (
        public readonly descripcion: string,
    ){}

    static create(props: {[key: string]: any}):[string?, CreateIdiomaDto?]{
        const { descripcion, nivel_minimo, nivel_maximo } = props;
        if ( !descripcion ) return ['La propiedad descripcion es requerida']

        return [undefined, new CreateIdiomaDto(descripcion)]
    }

}

