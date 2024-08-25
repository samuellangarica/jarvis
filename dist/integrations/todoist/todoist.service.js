"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoistService = void 0;
const common_1 = require("@nestjs/common");
const todoist_api_typescript_1 = require("@doist/todoist-api-typescript");
let TodoistService = class TodoistService {
    constructor() {
        this.todoistApi = new todoist_api_typescript_1.TodoistApi('d236ccf64734f37fef57dd12de12601bbd5cbc4e');
    }
    async addTask(content, projectId) {
        try {
            const task = await this.todoistApi.addTask({
                content,
                projectId,
            });
            console.log('Task created:', task);
        }
        catch (error) {
            console.error('Error creating task:', error);
        }
    }
};
exports.TodoistService = TodoistService;
exports.TodoistService = TodoistService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TodoistService);
//# sourceMappingURL=todoist.service.js.map