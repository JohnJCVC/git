import { EstudianteEntity } from "../../entities/alumno";
import { EstudianteRepository } from "../../repositories/estudiante.repository";

export interface GetAllEstudiantesUseCase{
    execute():Promise<EstudianteEntity[]>
}

export class GetAllEstudiantes implements GetAllEstudiantesUseCase{
    constructor(
        public readonly repository: EstudianteRepository
    ){}

    execute(): Promise<EstudianteEntity[]> {
        return this.repository.getAll();
    }
}