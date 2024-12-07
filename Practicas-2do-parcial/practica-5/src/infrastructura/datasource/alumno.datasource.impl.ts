import { EntityManager } from '@mikro-orm/mysql';
import { Estudiante } from '../../data/models/Estudiante'
import { EstudianteEntity } from '../../domain/entities/alumno';
import { CreateEstudianteDto } from '../../domain/dtos/estudiante/create-estudiante.dto';
import { EstudianteDatasource } from '../../domain/datasources/estudiante.datasource';
import { UpdateEstudianteDto } from '../../domain/dtos/estudiante/update-estudiate.dto';

export class EstudianteDatasourceImpl implements EstudianteDatasource {
  estudianteManager!: EntityManager;

  async create(createEstudianteDto: CreateEstudianteDto): Promise<EstudianteEntity> {
    const estudiante = this.estudianteManager.create(Estudiante, createEstudianteDto);
    await this.estudianteManager.persistAndFlush(estudiante);
    return EstudianteEntity.fromObject(estudiante);
  }


  async getAll(): Promise<EstudianteEntity[]> {
    try {
      const estudiantes = await this.estudianteManager.findAll(Estudiante);
      return estudiantes.map(estudiante => EstudianteEntity.fromObject(estudiante));
    } catch (error) {
      console.error("Error al obtener los estudiantes:", error);
      throw new Error('Error al obtener los estudiantes');
    }
  }

  async getById(id: number): Promise<EstudianteEntity> {
    const estudiante = await this.estudianteManager.findOne(Estudiante, {id});
    if (!estudiante) throw `Estudiante con id ${id} no encontrado`;
    return EstudianteEntity.fromObject(estudiante);
  }

  async updateById(updateEstudianteDto: UpdateEstudianteDto): Promise<EstudianteEntity> {
    const estudiante = await this.getById( updateEstudianteDto.id );
    if (!estudiante) {
      throw new Error(`Estudiante con id ${updateEstudianteDto.id} no encontrado`);
    }
  
    Object.assign(estudiante, UpdateEstudianteDto);
    await this.estudianteManager.flush();
  
    return estudiante;
  }
  

  async deleteById(id: number): Promise<EstudianteEntity> {
    const estudiante = await this.getById( id );
    await this.estudianteManager.removeAndFlush(estudiante);
    return estudiante;
  }
}
