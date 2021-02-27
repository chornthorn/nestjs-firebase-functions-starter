import { Controller, Get } from '@nestjs/common';

@Controller('student')
export class StudentController {
    @Get()
    getTask(): string {
        return 'This is student controller';
    }
}
