import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {

    constructor(

        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}
    
    get(): Promise<User[]> {
        return this.userRepository.find();
      }

    create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto);
      }

      update(updateUserDto: UpdateUserDto, userId: number) {
        return this.userRepository.update(userId, updateUserDto);
      }

    show(id: number) {
        return (this.userRepository.findOne({where: {id}}));
    }

    findByEmail(email: string) {
        return (this.userRepository.findOne({where: {email}}));
    }

    delete(id: number) {
        return (this.userRepository.delete(id));
    }
}
