import { Module } from '@nestjs/common';
import { CurrentUserController } from './current-user.controller';
import { CurrentUserService } from './current-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tbl_CurrentUser } from './current-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([tbl_CurrentUser])],
  controllers: [CurrentUserController],
  providers: [CurrentUserService],
})
export class CurrentUserModule {}
