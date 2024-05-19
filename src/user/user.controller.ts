import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import User from './user.interface';
import CreateUserDto from './createUser.dto';
import UpdateUserDto from './updateUser.dto';

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

  @Post()
  create(newUser: CreateUserDto): string {
    return this.userService.create(newUser);
  }

  @Patch(':id')
  update(id: string, user: UpdateUserDto): User {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return this.userService.delete(id);
  }
}
