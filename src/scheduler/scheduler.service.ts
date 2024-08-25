import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';

@Injectable()
export class SchedulerService {
  // This job will run every 10 seconds
  @Interval(2000)
  handleInterval() {
    console.log('Task running every 2 second');
  }
}