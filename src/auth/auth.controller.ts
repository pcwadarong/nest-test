import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Req,
  UseGuards,
  Delete,
  Param,
} from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signUp')
  @UsePipes(ValidationPipe)
  signUp(@Body() authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.authService.signUp(authCredentialDto);
  }

  @Post('/signIn')
  signIn(
    @Body() authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialDto);
  }

  @Post('/test')
  // userGuards로 authGuard를 넣어줘야 request 객체 안에 user data가 생김
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log(user);
  }
}
