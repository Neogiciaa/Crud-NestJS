import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import User from './user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): User {
    return this.userService.findById(id);
  }
}
