import { EntityManager, SqlEntityManager } from '@mikro-orm/mysql';
import { Idioma } from '../../data/models/Idioma';
import { ControlIdiomaEntity, CreateIdiomaDto, IdiomaDatasource, IdiomaEntity, UpdateIdiomaDto } from '../../domain';

export class IdiomaDatasourceImpl implements IdiomaDatasource {

  idiomaManager!: EntityManager;

  async create(createIdiomaDto: CreateIdiomaDto): Promise<IdiomaEntity> {
    const control = this.idiomaManager.create(Idioma, { ...createIdiomaDto })
    await this.idiomaManager.persistAndFlush(control)
    return IdiomaEntity.fromObject(control);
  }

  async getAll(): Promise<IdiomaEntity[]> {
    try {
      const idiomas = await this.idiomaManager.find(Idioma, {})
      console.log(idiomas)
      return idiomas.map(idioma => IdiomaEntity.fromObject(idioma))
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async getById(id: number): Promise<IdiomaEntity> {
    const idioma = await this.idiomaManager.findOneOrFail(Idioma, id);
    return IdiomaEntity.fromObject(idioma);
  }
  async updateById(updateIdiomaDto: UpdateIdiomaDto): Promise<IdiomaEntity> {
    const estudiante = await this.getById(updateIdiomaDto.id);
    if (!estudiante) {
      throw new Error(`Estudiante con id ${updateIdiomaDto.id} no encontrado`);
    }
    Object.assign(estudiante,);
    await this.idiomaManager.flush();
    return IdiomaEntity.fromObject(estudiante);
  }


  async deleteById(id: number): Promise<IdiomaEntity> {
    const control = await this.getById(id);
    await this.idiomaManager.removeAndFlush(control);
    return IdiomaEntity.fromObject(control);
  }
}
