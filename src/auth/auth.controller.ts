import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { AuthService } from './auth.service';
import { User } from './auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signUp')
  @UsePipes(ValidationPipe)
  signUp(@Body() authCredentialDto: AuthCredentialDto): Promise<User> {
    return this.authService.signUp(authCredentialDto);
  }
}
