import { CreateIdiomaDto } from "../../dtos";
import { IdiomaEntity } from "../../entities/idioma";
import { IdiomaRepository } from "../../repositories/idioma.repository";



export interface CreateIdiomaUseCase {
    execute( dto: CreateIdiomaDto):Promise<IdiomaEntity>
}

export class CreateIdioma implements CreateIdiomaUseCase{
    constructor(
        public readonly repository: IdiomaRepository
    ){}

    execute(dto: CreateIdiomaDto): Promise<IdiomaEntity> {
        return this.repository.create( dto );
    }
}