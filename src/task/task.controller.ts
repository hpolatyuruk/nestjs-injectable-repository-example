import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateTaskDTO } from './create-task.dto';
import { LoggerService } from 'src/shared/logger.service';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly logger: LoggerService,
    private readonly taskService: TaskService,
  ) {}

  @Post('')
  async createUser(@Body() dto: CreateTaskDTO): Promise<Task> {
    return await this.taskService.createTask(dto);
  }

  @Get('/unfinished')
  async getAllUnFinishedTasks(): Promise<Task[]> {
    return await this.taskService.getAllUnFinishedTasks();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return await this.taskService.getTaskById(id);
  }
}
