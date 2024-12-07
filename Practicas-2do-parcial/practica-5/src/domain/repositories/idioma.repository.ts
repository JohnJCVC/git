
import { CreateIdiomaDto, UpdateIdiomaDto } from '../dtos/index'
import { IdiomaEntity } from '../entities/idioma'


export abstract class  IdiomaRepository {

    abstract create( createIdioma: CreateIdiomaDto): Promise<IdiomaEntity>;
    abstract getAll(): Promise<IdiomaEntity[]>;
    abstract getById(id: number): Promise<IdiomaEntity>;
    abstract updateById( updateIdioma: UpdateIdiomaDto): Promise<IdiomaEntity>
    abstract deleteById(id: number): Promise<IdiomaEntity>;

}
