import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'john',
            email: 'john@gmail.com',
            password: 'changeme',
        },
        {
            id: 2,
            name: 'maria',
            email: 'maria@gmail.com',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.name === username);
    }
}
