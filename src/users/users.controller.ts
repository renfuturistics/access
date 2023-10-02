import {
  Controller,
  Post,
  Get,
  Request,
  Body,
  Param,
  Put,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dtos/createUser.dto';
import { updateUserDto } from './dtos/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: createUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getUser(id);
  }
  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: updateUserDto,
  ) {
    return await this.userService.updateUser(id, updateUserDto);
  }
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) ID: number) {
    return await this.userService.deleteUser(ID);
  }
}
