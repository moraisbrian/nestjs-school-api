import { Request, Controller, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from 'src/common/guards/local-auth.guard';
import { PasswordHashing } from 'src/common/password-hashing';
import { AuthService } from 'src/services/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('api/v1/auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('api/v1/auth/gethash')
  getHash(@Body() body) {
    return PasswordHashing.getHash(body.password);
  }
}
