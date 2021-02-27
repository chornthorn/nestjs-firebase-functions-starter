import { Controller, Get } from '@nestjs/common';

@Controller('category')
export class CategoryController {
    @Get()
    getTask(): string {
        return 'Hello category controller';
    }
}
