import { EntityRepository, MongoRepository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { LoggerService } from 'src/shared/logger.service';
import { Task } from './task.entity';

@Injectable()
@EntityRepository(Task)
export class Task3Repository extends MongoRepository<Task> {
  constructor(
    @Inject(LoggerService)
    private readonly logger: LoggerService,
  ) {
    super();
  }

  async createTask(task: Task): Promise<Task> {
    this.logger.debug('Task is being created...');
    await this.save(task);
    return task;
  }

  async findById(id: string): Promise<Task> {
    this.logger.debug('Task is being fetched by id...');
    return await this.findOne({ _id: id });
  }

  async findAllUnfinishedTasks(): Promise<Task[]> {
    this.logger.debug('All unfinished tasks getting...');
    return await this.find({ done: false });
  }
}
