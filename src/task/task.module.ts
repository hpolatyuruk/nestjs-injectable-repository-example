import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { LoggerService } from 'src/shared/logger.service';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  //imports: [TypeOrmModule.forFeature([TaskRepository])],
  providers: [TaskService, LoggerService, TaskRepository],
  controllers: [TaskController],
})
export class TaskModule {}
