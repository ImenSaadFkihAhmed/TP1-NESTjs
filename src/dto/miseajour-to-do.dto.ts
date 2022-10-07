import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ToDoEnum } from 'src/models/enum';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsEnum(ToDoEnum)
  status: ToDoEnum;
}