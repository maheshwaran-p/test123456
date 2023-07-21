import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelsModule } from './model/models.module';
import { UserModule } from './module/user/user.module';
import { UserService } from './model/services/user.service';


@Module({
  imports: [UserModule, ModelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
