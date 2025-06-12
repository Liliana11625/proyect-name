import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './types/cat.dto';

@Controller('cats') //  /cats
export class CatsController {

    //constructor
constructor(private readonly catsService:CatsService) {}


//index

@Get()
index(){
    return this.catsService.finAll();
}

@Post()
create(@Body()createCatDto:CatDto){
    return this.catsService.create(createCatDto);
}




}

