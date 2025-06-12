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

    // GET /cats/:id
    findOne(id: number): Cat {
    const cat = this.#cats.find((c) => c.id === id);
    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return cat;
  }

    // POST /cats
    create(CatDto: CatDto): Cat {
        const newCat: Cat = {
            id:this.#cats.length + 1,
            ...CatDto,
        }


        this.#cats.push(newCat);
        return newCat;
    }


}
