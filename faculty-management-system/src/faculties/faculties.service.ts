import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty) private readonly repo: Repository<Faculty>,
  ) {}

  async create(dto: CreateFacultyDto) {
    if (await this.repo.findOneBy({ id: dto.Id })) {
      throw new ConflictException('Faculty with this Id already exists');
    }
    const faculty = this.repo.create({
      id: dto.Id,
      name: dto.Name,
      expertise: dto.expertise,
      noOfPublication: dto.noOfPublication,
    });
    return this.repo.save(faculty);
  }
}