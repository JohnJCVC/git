

export class CreateEstudianteDto {
    private constructor(
        public readonly nombre: string,
        public readonly identificacion: string
    ){}

    static create(props: {[key: string]: any} ): [string?, CreateEstudianteDto?] {
        const { nombre, identificacion } = props

        if ( !nombre ) 
            return ['La propiedad nombre es requerida'];
        
        if ( !identificacion ) 
            return ['La propiedad identificacion es requerida'];

        return [undefined, new CreateEstudianteDto(nombre, identificacion)]
    }
}



