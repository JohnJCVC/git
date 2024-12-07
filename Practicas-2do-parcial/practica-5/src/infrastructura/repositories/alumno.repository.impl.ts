import { CreateEstudianteDto, EstudianteDatasource, EstudianteEntity, UpdateEstudianteDto } from "../../domain";
import { EstudianteRepository } from "../../domain/repositories/estudiante.repository";





export class EstudianteRepositoryImpl implements EstudianteRepository {
    constructor(
        private readonly datasource: EstudianteDatasource
    ){}

    create(createEstudianteDto: CreateEstudianteDto): Promise<EstudianteEntity> {
        return this.datasource.create( createEstudianteDto )
    }

    getAll(): Promise<EstudianteEntity[]> {
        return this.datasource.getAll();
    }

    getById(id: number): Promise<EstudianteEntity> {
        return this.datasource.getById( id )
    }
    
    updateById(updateEstudianteDto: UpdateEstudianteDto): Promise<EstudianteEntity> {
        return this.datasource.updateById( updateEstudianteDto )
    }
    
    deleteById(id: number): Promise<EstudianteEntity> {
        return this.datasource.deleteById( id )
    }

}