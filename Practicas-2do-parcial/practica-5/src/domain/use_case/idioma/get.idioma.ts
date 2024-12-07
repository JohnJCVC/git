import { IdiomaEntity } from "../../entities/idioma";
import { IdiomaRepository } from "../../repositories/idioma.repository";

export interface GetIdiomaUseCase {
    execute ( id: number): Promise<IdiomaEntity>
}

export class GetIdioma implements GetIdiomaUseCase{
    constructor(
        private readonly repository: IdiomaRepository
    ){}

    execute(id: number): Promise<IdiomaEntity> {
        return this.repository.getById( id )
    }
}