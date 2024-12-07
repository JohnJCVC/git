import { IdiomaEntity } from "../../entities/idioma"
import { IdiomaRepository } from "../../repositories/idioma.repository"



export interface DeleteIdiomaUseCase {
    execute( id: number ): Promise<IdiomaEntity>
}


export class DeleteIdioma implements DeleteIdiomaUseCase {
    
    constructor(
        private readonly repository: IdiomaRepository
    ){}


    execute(id: number): Promise<IdiomaEntity> {
        return this.repository.deleteById(id)
    }
}