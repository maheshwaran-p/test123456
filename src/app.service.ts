import { Injectable } from '@nestjs/common';
import { async } from 'rxjs';

@Injectable()
export class AppService {


  getHello(): string {
    return 'Hello World!';
  }

  async getbye(): Promise<any> {

    return { msg: 'bye....' }

  }
}
