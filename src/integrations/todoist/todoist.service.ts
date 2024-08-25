import { Injectable } from '@nestjs/common';
import { TodoistApi } from '@doist/todoist-api-typescript';

@Injectable()
export class TodoistService {
  private readonly todoistApi: TodoistApi;

  constructor() {
    this.todoistApi = new TodoistApi('d236ccf64734f37fef57dd12de12601bbd5cbc4e');
  }

  async addTask(content: string, projectId?: string): Promise<void> {
    try {
      const task = await this.todoistApi.addTask({
        content,
        projectId,
      });
      console.log('Task created:', task);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  }
}