import { CreateIdiomaDto, IdiomaDatasource, IdiomaEntity, UpdateIdiomaDto } from "../../domain";
import { IdiomaRepository } from "../../domain/repositories/idioma.repository";

export class IdiomaRepositoryImpl implements IdiomaRepository {
    constructor(
        private readonly datasource: IdiomaDatasource
    ) {}

    create(createIdiomaDto: CreateIdiomaDto): Promise<IdiomaEntity> {
        return this.datasource.create(createIdiomaDto);
    }

    getAll(): Promise<IdiomaEntity[]> {
        return this.datasource.getAll();
    }

    getById(id: number): Promise<IdiomaEntity> {
        return this.datasource.getById(id);
    }

    updateById(updateIdiomaDto: UpdateIdiomaDto): Promise<IdiomaEntity> {
        return this.datasource.updateById(updateIdiomaDto);
    }

    deleteById(id: number): Promise<IdiomaEntity> {
        return this.datasource.deleteById(id);
    }
}
