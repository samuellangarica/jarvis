import { TodoistService } from 'src/integrations/todoist/todoist.service';
export declare class SchedulerService {
    private readonly todoistService;
    constructor(todoistService: TodoistService);
    handleTaskCreation(): Promise<void>;
}
