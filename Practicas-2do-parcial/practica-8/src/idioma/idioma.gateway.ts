import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { IdiomaService } from './idioma.service';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';

@WebSocketGateway()
export class IdiomaGateway {
  constructor(private readonly idiomaService: IdiomaService) {}

  @SubscribeMessage('createIdioma')
  create(@MessageBody() createIdiomaDto: CreateIdiomaDto) {
    return this.idiomaService.create(createIdiomaDto);
  }

  @SubscribeMessage('findAllIdioma')
  findAll() {
    return this.idiomaService.findAll();
  }

  @SubscribeMessage('findOneIdioma')
  findOne(@MessageBody() id: number) {
    return this.idiomaService.findOne(id);
  }

  @SubscribeMessage('updateIdioma')
  update(@MessageBody() updateIdiomaDto: UpdateIdiomaDto) {
    return this.idiomaService.update(updateIdiomaDto.id, updateIdiomaDto);
  }

  @SubscribeMessage('removeIdioma')
  remove(@MessageBody() id: number) {
    return this.idiomaService.remove(id);
  }
}
