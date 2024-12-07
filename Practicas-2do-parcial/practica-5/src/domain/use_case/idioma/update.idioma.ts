import { UpdateIdiomaDto } from "../../dtos";
import { IdiomaEntity } from "../../entities/idioma";
import { IdiomaRepository } from "../../repositories/idioma.repository";

export interface UpdateIdiomaUseCase {
    execute( dto: UpdateIdiomaDto):Promise<IdiomaEntity>
}

export class UpdateIdioma implements UpdateIdiomaUseCase{
    constructor(
        public readonly repository: IdiomaRepository
    ){}

    execute(dto: UpdateIdiomaDto): Promise<IdiomaEntity> {
        return this.repository.updateById( dto );
    }
}