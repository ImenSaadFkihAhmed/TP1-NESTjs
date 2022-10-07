import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { testPremier } from './premier/Premier.module';
import { ToDoModuleModule } from './to-do-module/to-do-module.module';

@Module({
  imports: [testPremier,ToDoModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
