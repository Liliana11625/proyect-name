import { Injectable, NotFoundException } from '@nestjs/common';
import { Cat } from './types/cat.type';
import { CatDto } from './types/cat.dto';

@Injectable()
export class CatsService {

    #cats: Cat[];

    constructor(){
        this.#cats = [
            {
                id:1,
                name: "pelusa",
                color: "cafe",
            },
        ];
    }

    // GET /cats
    findAll():Cat[] {
        return this.#cats;
    }


}
