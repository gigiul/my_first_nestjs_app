import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { Request } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login (@Request() req: any) {
        return req.user;
    }
}
