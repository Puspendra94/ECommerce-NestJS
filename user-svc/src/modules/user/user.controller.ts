import { Controller, Get, Inject, Post, Put } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Controller({
    path: 'user',
    version: '1',
})
export class UserController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @Post()
    login() {
        return 'login';
    }

    @Post()
    signup() {
        this.authService.encrypt('password');
        return 'signup';
    }

    @Get('/:id')
    getById() {
        return 'getById';
    }

    @Get()
    getAll() {
        return 'getAll';
    }

    @Put('/:id')
    updateUser() {
        return 'putUser';
    }
}
