import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core';
import { ControlDeIdioma } from './ControlDeIdioma';

@Entity()
export class Estudiante {
  @PrimaryKey()
  id!: number;
  
  @Property()
  nombre!: string;
  
  @Property()
  identificacion!: string;

  
  @OneToMany(() => ControlDeIdioma, (control) => control.estudiante)
  controles = new Collection<ControlDeIdioma>(this);

}
