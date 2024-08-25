import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { TodoistService } from 'src/integrations/todoist/todoist.service';

@Injectable()
export class SchedulerService {
  constructor(private readonly todoistService: TodoistService) {}

  @Interval(10000) 
  async handleTaskCreation() {
    await this.todoistService.addTask('Automated task every minute');
  }
}