import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { LoggerService } from 'src/shared/logger.service';
import { Task } from './task.entity';
import { CreateTaskDTO } from './create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    private readonly logger: LoggerService,
    private readonly taskRepository: TaskRepository,
  ) {}

  async createTask(dto: CreateTaskDTO): Promise<Task> {
    const task = new Task();
    task._id = dto._id;
    task.title = dto.title;
    task.done = dto.done;
    return await this.taskRepository.createTask(task);
  }

  async getTaskById(id: string): Promise<Task> {
    return await this.taskRepository.findById(id);
  }

  async getAllUnFinishedTasks(): Promise<Task[]> {
    return await this.taskRepository.findAllUnfinishedTasks();
  }
}
