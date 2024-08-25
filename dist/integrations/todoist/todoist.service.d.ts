export declare class TodoistService {
    private readonly todoistApi;
    constructor();
    addTask(content: string, projectId?: string): Promise<void>;
}
