import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from './types/dog.type';
import { DogDto } from './types/dog.dto';

@Injectable()
export class DogsService {
  private dogs: Dog[] = [
    { id: 1, name: 'Fido', breed: 'Labrador', age: 5, color: 'negro' },
    { id: 2, name: 'Max', breed: 'Beagle', age: 3, color: 'cafe' },
  ];

  findAll(): Dog[] {
    return this.dogs;
  }

  findOne(id: number): Dog {
    const dog = this.dogs.find((dog) => dog.id === id);
    if (!dog) {
      throw new NotFoundException(`Dog with id ${id} not found`);
    }
    return dog;
  }

  create(dogDto: DogDto): Dog {
    const newDog: Dog = {
      id: this.dogs.length + 1,
      ...dogDto,
    };
    this.dogs.push(newDog);
    return newDog;
  }

  update(id: number, partialDog: Partial<DogDto>): Dog {
    const index = this.dogs.findIndex((dog) => dog.id === id);
    if (index === -1) {
      throw new NotFoundException(`Dog with id ${id} not found`);
    }
    this.dogs[index] = { ...this.dogs[index], ...partialDog };
    return this.dogs[index];
  }

  delete(id: number): boolean {
    const index = this.dogs.findIndex((dog) => dog.id === id);
    if (index === -1) {
      throw new NotFoundException(`Dog with id ${id} not found`);
    }
    this.dogs.splice(index, 1);
    return true;
  }
}

