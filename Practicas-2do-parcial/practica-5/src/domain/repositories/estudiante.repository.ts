import { CreateEstudianteDto } from "../dtos/estudiante/create-estudiante.dto";
import { UpdateEstudianteDto } from "../dtos/estudiante/update-estudiate.dto";
import { EstudianteEntity } from "../entities/alumno";



export abstract class  EstudianteRepository {

    abstract create( createEstudiante: CreateEstudianteDto): Promise<EstudianteEntity>;
    abstract getAll(): Promise<EstudianteEntity[]>;
    abstract getById(id: number): Promise<EstudianteEntity>;
    abstract updateById( updateEstudiante: UpdateEstudianteDto ): Promise<EstudianteEntity>
    abstract deleteById(id: number): Promise<EstudianteEntity>;

}