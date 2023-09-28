import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { tbl_Users } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([tbl_Users])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
