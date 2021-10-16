import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Coordinator } from 'src/entities/coordinator.entity';
import { CoordinatorService } from 'src/services/coordinator.service';
import { CoordinatorDto } from '../dtos/coordinator.dto';

@Controller('api/v1/coordinators')
export class CoordinatorController {
    constructor(private readonly coordinatorService: CoordinatorService) {}

    @Post()
    public async addCoordinator(@Body() coordinatorDto: CoordinatorDto): Promise<Coordinator> {
        return await this.coordinatorService.addCoordinator(coordinatorDto);
    }

    @Get()
    public async getCoordinators(): Promise<Coordinator[]> {
        return await this.coordinatorService.getCoordinators();
    }

    @Get(':id')
    public async getCoordinatorById(@Param() params): Promise<Coordinator> {
        return await this.coordinatorService.getCoordinatorById(params.id);
    }   
}
