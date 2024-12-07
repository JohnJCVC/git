import { Module } from '@nestjs/common';
import { ControlIdiomaModule } from './control_idioma/control_idioma.module';
import { IdiomaModule } from './idioma/idioma.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

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

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      introspection: true, 
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
