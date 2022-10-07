import { Module } from '@nestjs/common';
import { ToDoControlerController } from 'src/to-do-controler/to-do-controler.controller';
import { ToDoModel } from 'src/models/ToDoModel';

@Module({
    imports: [ToDoModel],
    controllers: [ToDoControlerController],
})
export class ToDoModuleModule {}
