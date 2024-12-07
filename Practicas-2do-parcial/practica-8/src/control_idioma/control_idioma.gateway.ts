import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ControlIdiomaService } from './control_idioma.service';
import { CreateControlIdiomaDto } from './dto/create-control_idioma.dto';
import { UpdateControlIdiomaDto } from './dto/update-control_idioma.dto';

@WebSocketGateway()
export class ControlIdiomaGateway {
  constructor(private readonly controlIdiomaService: ControlIdiomaService) {}

  @SubscribeMessage('createControlIdioma')
  create(@MessageBody() createControlIdiomaDto: CreateControlIdiomaDto) {
    return this.controlIdiomaService.create(createControlIdiomaDto);
  }

  @SubscribeMessage('findAllControlIdioma')
  findAll() {
    return this.controlIdiomaService.findAll();
  }

  @SubscribeMessage('findOneControlIdioma')
  findOne(@MessageBody() id: number) {
    return this.controlIdiomaService.findOne(id);
  }

  @SubscribeMessage('updateControlIdioma')
  update(@MessageBody() updateControlIdiomaDto: UpdateControlIdiomaDto) {
    return this.controlIdiomaService.update(updateControlIdiomaDto.id, updateControlIdiomaDto);
  }

  @SubscribeMessage('removeControlIdioma')
  remove(@MessageBody() id: number) {
    return this.controlIdiomaService.remove(id);
  }
}
