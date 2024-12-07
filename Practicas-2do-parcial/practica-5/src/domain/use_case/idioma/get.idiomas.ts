import { IdiomaEntity } from "../../entities/idioma";
import { IdiomaRepository } from "../../repositories/idioma.repository";

export interface GetAllIdiomasUseCase{
    execute():Promise<IdiomaEntity[]>
}
export class GetAllIdiomaes implements GetAllIdiomasUseCase{
    constructor(
        public readonly repository: IdiomaRepository
    ){}

    execute(): Promise<IdiomaEntity[]> {
        return this.repository.getAll();
    }
}