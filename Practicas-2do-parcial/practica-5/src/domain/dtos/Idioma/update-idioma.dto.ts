


export class UpdateIdiomaDto {
    private constructor(
        public readonly id: number,
        public readonly descripcion?: string,
        public readonly nivel_minimo?: number,
        public readonly nivel_maximo?: number
    ){}

    get values() {
        const returnObj: { [key: string]: any } = {};
        if (this.descripcion) returnObj.descripcion = this.descripcion;

        return returnObj;
    }

    static update(props: {[key: string]: any}): [string?, UpdateIdiomaDto?] {
        const { id, descripcion } = props;
        if ( !id ) return ['id es requerido', undefined];
        return [undefined, new UpdateIdiomaDto(id, descripcion)];
    }

}