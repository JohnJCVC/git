## Proyecto de Arquitectura en Capas con MikroORM y MySQL

Este proyecto implementa una arquitectura en capas, utilizando MikroORM como ORM y MySQL como base de datos. La estructura del proyecto está organizada en capas para seguir principios de separación de responsabilidades y escalabilidad.

Dependencias principales

MikroORM: ORM para manejar la base de datos MySQL.
Express: Framework para manejar el servidor HTTP.
dotenv: Manejo de variables de entorno.
class-validator: Validación de datos enviados por el cliente.
class-transformer: Transformación de datos para los DTOs.

Pasos para levantar el proyecto
1. Instalar dependencias
Asegúrate de tener Node.js instalado en tu sistema. Luego, ejecuta:

bash
Copiar código
npm install
2. Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

env
Copiar código
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=tu_password
DATABASE_NAME=nombre_base_datos
3. Configurar MikroORM
El archivo de configuración de MikroORM (src/config/mikro-orm.config.ts) debe incluir lo siguiente:

typescript
Copiar código
import { MikroORMOptions } from '@mikro-orm/core';

const config: MikroORMOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  dbName: process.env.DATABASE_NAME,
  entities: ['./src/domain/entities/*.ts'], // Ruta a las entidades del dominio
  migrations: {
    path: './src/migrations', // Carpeta donde se guardarán las migraciones
  },
};

export default config;
4. Crear la base de datos y correr migraciones
Primero, crea la base de datos manualmente en MySQL si no existe. Luego, ejecuta las migraciones:

npx mikro-orm migration:up
5. Levantar el servidor
Ejecuta el siguiente comando para iniciar el servidor:

npm run start

El servidor estará corriendo en http://localhost:3000.

Endpoints de la API
GET /Control indioma


POST /entidad


