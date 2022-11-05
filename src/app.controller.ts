import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id')
  getHello(
    @Req() req: Request,
    @Body() body,
    @Param() param: { id: string; name: string },
  ): string {
    console.log(param);
    //console.log(body);

    // 책임 분리를 위해 param이나 body를 서비스에 넘기기
    //return this.appService.getHello(body, param);
    return this.appService.getHello();
  }
}
