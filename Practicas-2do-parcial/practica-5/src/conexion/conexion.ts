import { MikroORM } from '@mikro-orm/core';
import { Options } from '@mikro-orm/core';
import { ControlDeIdioma } from '../data/models/ControlDeIdioma';
import { Estudiante } from '../data/models/Estudiante';
import { Idioma } from '../data/models/Idioma';
import { MySqlDriver } from '@mikro-orm/mysql';  

const config: Options = {
  host: 'localhost',
  port: 3306,  
  user: 'root',
  password: '',  
  dbName: 'idiomas',
  entities: [ControlDeIdioma, Estudiante, Idioma],  
  driver: MySqlDriver,
};

export default config;