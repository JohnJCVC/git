import { CreateEstudianteDto } from "../../dtos";
import { EstudianteEntity } from "../../entities/alumno";
import { EstudianteRepository } from "../../repositories/estudiante.repository";



export interface CreateEstudianteUseCase {
    execute( dto: CreateEstudianteDto):Promise<EstudianteEntity>
}

export class CreateEstudiante implements CreateEstudianteUseCase{
    constructor(
        public readonly repository: EstudianteRepository
    ){}

    execute(dto: CreateEstudianteDto): Promise<EstudianteEntity> {
        return this.repository.create( dto );
    }
}