import { Injectable, NotFoundException } from '@nestjs/common';
import User from './user.interface';
import CreateUserDto from './createUser.dto';
import UpdateUserDto from './updateUser.dto';

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 1,
      email: 'Test@test.be',
      password: 'TestPassword',
      firstName: 'Stéphen',
      lastName: 'Chevalier',
    },
    {
      id: 2,
      email: 'Test2@test.be',
      password: 'TestPassword',
      firstName: 'Neo',
      lastName: 'Giciaa',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(id: string): User {
    const matchedUser = this.users.find((user) => user.id === +id);

    if (!matchedUser) {
      throw new NotFoundException('User not found');
    }
    return matchedUser;
  }

  create(user: CreateUserDto): string {
    this.users.push(user);
    return 'Successfully created user';
  }

  update(id: string, user: UpdateUserDto) {
    const userToUpdate = this.users.find((user) => user.id === +id);

    if (!userToUpdate) {
      throw new NotFoundException('User not found');
    }

    userToUpdate.id = user.id;
    userToUpdate.email = user.email;
    userToUpdate.password = user.password;
    userToUpdate.firstName = user.firstName;
    userToUpdate.lastName = user.lastName;

    const updatedUsers = this.users.map((user) =>
      user.id !== +id ? user : userToUpdate,
    );
    this.users = [...updatedUsers];
    return userToUpdate;
  }
}
