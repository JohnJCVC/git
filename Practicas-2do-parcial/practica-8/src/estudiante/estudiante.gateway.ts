import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@WebSocketGateway()
export class EstudianteGateway {
  constructor(private readonly estudianteService: EstudianteService) {}

  @SubscribeMessage('createEstudiante')
  create(@MessageBody() createEstudianteDto: CreateEstudianteDto) {
    return this.estudianteService.create(createEstudianteDto);
  }

  @SubscribeMessage('findAllEstudiante')
  findAll() {
    return this.estudianteService.findAll();
  }

  @SubscribeMessage('findOneEstudiante')
  findOne(@MessageBody() id: number) {
    return this.estudianteService.findOne(id);
  }

  @SubscribeMessage('updateEstudiante')
  update(@MessageBody() updateEstudianteDto: UpdateEstudianteDto) {
    return this.estudianteService.update(updateEstudianteDto.id, updateEstudianteDto);
  }

  @SubscribeMessage('removeEstudiante')
  remove(@MessageBody() id: number) {
    return this.estudianteService.remove(id);
  }
}
