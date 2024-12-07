import { EntityManager } from '@mikro-orm/mysql';
import { ControlIdiomaDatasource, ControlIdiomaEntity, CreateControlIdiomaDto, EstudianteEntity, UpdateControlIdiomaDto } from '../../domain';
import { ControlDeIdioma } from '../../data/models/ControlDeIdioma';
import { Estudiante } from '../../data/models/Estudiante';
import { Idioma } from '../../data/models/Idioma';

export class ControlIdiomaDatasourceImpl implements ControlIdiomaDatasource {

  private controlManager: EntityManager;

  constructor(controlManager: EntityManager) {
    this.controlManager = controlManager;
  }

  async create(createControlDeIdiomaDto: CreateControlIdiomaDto): Promise<ControlIdiomaEntity> {
    const estudiante = await this.controlManager.findOne(Estudiante, createControlDeIdiomaDto.idEstudiante);
    const idioma = await this.controlManager.findOne(Idioma, createControlDeIdiomaDto.idIdioma);
    
    if (!estudiante) throw new Error('Id de estudiante no válido');
    if (!idioma) throw new Error('Id de idioma no válido');

    const control = this.controlManager.create(ControlDeIdioma, { estudiante, idioma, ...createControlDeIdiomaDto });
    await this.controlManager.persistAndFlush(control);
    return ControlIdiomaEntity.fromObject(control);
  }

  async getAll(): Promise<ControlIdiomaEntity[]> {
    try {
      const controls = await this.controlManager.find(ControlDeIdioma, {});
      return controls.map(control => ControlIdiomaEntity.fromObject(control));
    } catch (error) {
      throw new Error(`Error al obtener los controles de idioma: ${error}`);
    }
  }

  async getById(id: number): Promise<ControlIdiomaEntity> {
    try {
      const control = await this.controlManager.findOneOrFail(ControlDeIdioma, id, { populate: ['estudiante', 'idioma'] });
      return ControlIdiomaEntity.fromObject(control);
    } catch (error) {
      throw new Error(`Control de idioma con id ${id} no encontrado`);
    }
  }

  async updateById(updateControlIdiomaDto: UpdateControlIdiomaDto): Promise<ControlIdiomaEntity> {
    const control = await this.getById(updateControlIdiomaDto.id);
    Object.assign(control, updateControlIdiomaDto);
    await this.controlManager.flush();
    return ControlIdiomaEntity.fromObject(control);
  }

  async deleteById(id: number): Promise<ControlIdiomaEntity> {
    const control = await this.getById(id);
    await this.controlManager.removeAndFlush(control);
    return ControlIdiomaEntity.fromObject(control);
  }
}
