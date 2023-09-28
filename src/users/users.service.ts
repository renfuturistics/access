import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbl_Users } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(tbl_Users) private usersRepository: Repository<tbl_Users>,
  ) {}

  async getUsers(user: tbl_Users): Promise<tbl_Users[]> {
    return await this.usersRepository.find();
  }

  async getUser(_id: number): Promise<tbl_Users[]> {
    return await this.usersRepository.find({
      where: [{ ID: _id }],
    });
  }

  async updateUser(user: tbl_Users) {
    this.usersRepository.save(user);
  }

  async deleteUser(user: tbl_Users) {
    this.usersRepository.delete(user);
  }
}
