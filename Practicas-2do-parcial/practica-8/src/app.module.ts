import { Module } from '@nestjs/common';
import { EstudianteModule } from './estudiante/estudiante.module';
import { IdiomaModule } from './idioma/idioma.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlIdiomaModule } from './control_idioma/control_idioma.module';

@Module({
  imports: [
    EstudianteModule,
    IdiomaModule,
    ControlIdiomaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123123',
      autoLoadEntities: true,
      database: 'idiomas',
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
