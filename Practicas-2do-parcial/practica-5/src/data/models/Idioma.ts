import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core';
import { ControlDeIdioma } from './ControlDeIdioma';

@Entity()
export class Idioma {
  @PrimaryKey()
  id!: number;

  @Property()
  descripcion!: string;

  @OneToMany(() => ControlDeIdioma, (control) => control.idioma)
  controles = new Collection<ControlDeIdioma>(this);
}
