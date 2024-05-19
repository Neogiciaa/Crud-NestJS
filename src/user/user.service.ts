import { Injectable, NotFoundException } from '@nestjs/common';
import User from './user.interface';

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
}
