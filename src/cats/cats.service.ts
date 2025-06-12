import { Injectable } from '@nestjs/common';
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
                color: "cafe"
            }
        ]
    }

//metodo para devolver todos los registros

    finAll():Cat[] {
        return this.#cats;
    }

//implementas el resto de los metodos

    create(cat: CatDto) {

        const newCat = {
            id:this.#cats.length + 1,
            ...cat,
        }

        this.#cats.push(newCat);

        return newCat;
    }

}

//atributo cats

