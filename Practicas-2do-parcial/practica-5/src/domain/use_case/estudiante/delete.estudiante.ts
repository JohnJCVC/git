import { EstudianteEntity } from "../../entities/alumno";
import { EstudianteRepository } from "../../repositories/estudiante.repository";

export interface DeleteEstudianteUseCase {
    execute( id: number ): Promise<EstudianteEntity>
}

export class DeleteEstudiante implements DeleteEstudianteUseCase {
    
    constructor(
        private readonly repository: EstudianteRepository
    ){}

    execute(id: number): Promise<EstudianteEntity> {
        return this.repository.deleteById(id)
    }
}