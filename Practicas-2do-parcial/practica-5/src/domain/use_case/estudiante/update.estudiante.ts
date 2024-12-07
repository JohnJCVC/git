import { UpdateEstudianteDto } from "../../dtos";
import { EstudianteEntity } from "../../entities/alumno";
import { EstudianteRepository } from "../../repositories/estudiante.repository";

export interface UpdateEstudianteUseCase {
    execute( dto: UpdateEstudianteDto):Promise<EstudianteEntity>
}

export class UpdateEstudiante implements UpdateEstudianteUseCase{
    constructor(
        public readonly repository: EstudianteRepository
    ){}

    execute(dto: UpdateEstudianteDto): Promise<EstudianteEntity> {
        return this.repository.updateById( dto );
    }
}