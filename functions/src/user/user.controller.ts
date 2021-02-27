import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getTask(): string {
        return 'Hello world from user controller';
    }
}
