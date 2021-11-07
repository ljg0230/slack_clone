import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiResponse({
    type: UserDto,
  })
  @ApiOperation({ summary: '내 정보 조회' })
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post()
  postUsers(@Body() body: JoinRequestDto) {
    this.usersService.postUsers(body.email, body.nickname, body.password);
  }

  @ApiResponse({
    status: 200,
    type: UserDto,
    description: 'Success',
  })
  @ApiResponse({
    status: 500,
    type: UserDto,
    description: 'Server Error',
  })
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
