import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getTask(): string {
        return 'Hello World from controller';
    }
}
