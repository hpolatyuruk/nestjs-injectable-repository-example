import { EntityRepository, EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/shared/logger.service';
import { Task } from './task.entity';

@Injectable()
@EntityRepository(Task)
export class TaskRepository {
  constructor(
    private manager: EntityManager,
    private readonly logger: LoggerService,
  ) {}

  async createTask(task: Task): Promise<Task> {
    this.logger.debug('Task is being created...');
    await this.manager.save(task);
    return task;
  }

  async findById(id: string): Promise<Task> {
    this.logger.debug('Task is being fetched by id...');
    return await this.manager.findOne(Task, { _id: id });
  }

  async findAllUnfinishedTasks(): Promise<Task[]> {
    this.logger.debug('All unfinished tasks getting...');
    return await this.manager.find(Task, { done: false });
  }
}
