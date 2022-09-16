import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordHashing } from 'src/common/password-hashing';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);
        const hashPassword = PasswordHashing.getHash(password);
        if (user && user.password === hashPassword) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    login(user: any): any {
        const payload = { 
            username: user.dataValues.username,
            sub: user.dataValues.id,
            roles: user.dataValues.roles
        }

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
