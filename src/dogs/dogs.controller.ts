import { Body, Controller, Get, Post, Param, Patch, Delete} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogDto } from './types/dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  findAll() {
    return this.dogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(Number(id));
  }

  @Post()
  create(@Body() dogDto: DogDto) {
    return this.dogsService.create(dogDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() partialDto: Partial<DogDto>) {
    return this.dogsService.update(Number(id), partialDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.dogsService.delete(Number(id));
  }
}
