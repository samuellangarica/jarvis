import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulerService } from './scheduler/scheduler.service';
import { TodoistModule } from './integrations/todoist/todoist.module';

@Module({
  imports: [ScheduleModule.forRoot(), TodoistModule],
  providers: [SchedulerService],
})
export class AppModule {}