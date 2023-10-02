import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbl_Users } from './user.entity';
import { User } from './user.type';

import { updateUserDto } from './dtos/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(tbl_Users) private usersRepository: Repository<tbl_Users>,
  ) {}

  async getUsers(): Promise<tbl_Users[]> {
    return this.usersRepository.find();
  }

  async getUser(_id: number): Promise<tbl_Users[]> {
    const user = await this.usersRepository.find({
      where: [{ ID: _id }],
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async updateUser(id: number, updateUserDto: updateUserDto) {
    const updateUsers = this.usersRepository.update(
      { ID: id },
      { ...updateUserDto },
    );
    if (!updateUserDto) throw new BadRequestException();
    return updateUsers;
  }

  async deleteUser(ID: number) {
    const deleteUser = this.usersRepository.delete({ ID });
    if (!deleteUser) throw new BadRequestException();
    return 'User deleted successfully';
  }
  async createUser(user: User) {
    const newUser = this.usersRepository.create({ ...user });
    return this.usersRepository.save(newUser);
  }
}
