import { EntityRepository, AbstractRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/shared/logger.service';
import { Task } from './task.entity';

@Injectable()
@EntityRepository(Task)
export class Task2Repository extends AbstractRepository<Task> {
  constructor(private readonly logger: LoggerService) {
    super();
  }

  async createTask(task: Task): Promise<Task> {
    this.logger.debug('Task is being created...');
    await this.manager.save(task);
    return task;
  }

  async findById(id: string): Promise<Task> {
    this.logger.debug('Task is being fetched by id...');
    return await this.repository.findOne({ _id: id });
  }
}
