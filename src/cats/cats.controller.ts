import { Body, Controller, Get, Post, Param, Patch, Delete} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './types/cat.dto';

@Controller('cats') //  /cats
export class CatsController {
    
    constructor(private readonly catsService: CatsService) {}


@Get()
findAll(){
    return this.catsService.findAll();
}


}

