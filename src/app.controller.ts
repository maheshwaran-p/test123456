import { Post } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/hi')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/bye')
  async Hello(): Promise<any> {
    return await this.appService.getbye();
  }

  @Post('/post')
  async postCall(): Promise<any> {

    return { msg: 'success' }
  }

}
