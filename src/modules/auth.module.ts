import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/common/strategy/jwt.strategy';
import { LocalStrategy } from 'src/common/strategy/local.strategy';
import { AuthService } from 'src/services/auth.service';
import { UserModule } from './user.module';

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: () => ({
                secret: process.env.SECRET,
                signOptions: { expiresIn: process.env.EXPIRES_IN }
            })
        })
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}
