import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enums/role.enum';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { CoordinatorDto } from 'src/dtos/coordinator.dto';
import { Coordinator } from 'src/models/coordinator.model';
import { CoordinatorService } from 'src/services/coordinator.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('api/v1/coordinators')
export class CoordinatorController {
    constructor (private coordinatorService: CoordinatorService) {}

    @Post()
    @Roles(Role.Admin)
    @UsePipes(ValidationPipe)
    async add(@Body() coordinatorDto: CoordinatorDto): Promise<Coordinator> {
        return await this.coordinatorService.add(coordinatorDto);
    }

    @Get()
    @Roles(Role.User)
    async getAll(): Promise<Coordinator[]> {
        return await this.coordinatorService.findAll();
    }
}
