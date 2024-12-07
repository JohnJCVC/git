import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControlIdiomaModule } from './control_idioma/control_idioma.module';
import { IdiomaModule } from './idioma/idioma.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ControlIdiomaModule,
    IdiomaModule,
    EstudianteModule,
  
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

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
