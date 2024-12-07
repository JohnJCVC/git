import { Entity, PrimaryKey, ManyToOne, Property } from '@mikro-orm/core';
import { Estudiante } from './Estudiante';
import { Idioma } from './Idioma';

@Entity()
export class ControlDeIdioma {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => Estudiante)
  estudiante!: Estudiante;

  @ManyToOne(() => Idioma)
  idioma!: Idioma;

  @Property()
  porcentajeLectura!: number;

  @Property()
  porcentajeEscritura!: number;

  @Property()
  porcentajeEscucharHablar!: number;

  constructor(init?: Partial<ControlDeIdioma>) {
    Object.assign(this, init);
  }
}
