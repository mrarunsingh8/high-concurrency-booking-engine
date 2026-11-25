import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto.js';
import { UpdateCityDto } from './dto/update-city.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity.js';

@Injectable()
export class CityService {

  constructor(@InjectRepository(City) private cityRepository: Repository<City>) {}

  async create(createCityDto: CreateCityDto): Promise<City> {
    const {name} = createCityDto;
    const existingCity = await this.cityRepository.findOne({
      where: { name: name }
    });

    if (existingCity) {
      throw new ConflictException('City already exists in this state');
    }

    const newCity = this.cityRepository.create({ name });
    return this.cityRepository.save(newCity);
  }

  findAll() {
    return this.cityRepository.find();
  }

  findOne(id: number) {
    return this.cityRepository.findOne({
      where: { id: id }
    });
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return this.cityRepository.update(id, updateCityDto);
  }

  remove(id: number) {
    return this.cityRepository.delete(id);
  }
}
