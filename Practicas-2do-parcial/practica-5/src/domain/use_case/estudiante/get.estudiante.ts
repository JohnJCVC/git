import { EstudianteEntity } from "../../entities/alumno";
import { EstudianteRepository } from "../../repositories/estudiante.repository";

export interface GetEstudianteUseCase {
    execute ( id: number): Promise<EstudianteEntity>
}

export class GetEstudiante implements GetEstudianteUseCase{
    constructor(
        private readonly repository: EstudianteRepository
    ){}

    execute(id: number): Promise<EstudianteEntity> {
        return this.repository.getById( id )
    }
}