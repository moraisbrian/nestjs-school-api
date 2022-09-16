import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enums/role.enum';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { StudantDto } from 'src/dtos/studant.dto';
import { Studant } from 'src/models/studant.model';
import { StudantService } from '../services/studant.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('api/v1/studants')
export class StudantController {
    constructor(private studantService: StudantService) {}

    @Get()
    @Roles(Role.User)
    async getAll(): Promise<Studant[]> {
        return await this.studantService.findAll();
    }

    @Get(':id')
    @Roles(Role.User)
    async getById(@Param('id') id: number): Promise<Studant> {
        return await this.studantService.findById(id);
    }

    @Post()
    @Roles(Role.User)
    @UsePipes(ValidationPipe)
    async add(@Body() studantDto: StudantDto): Promise<Studant> {
        return await this.studantService.add(studantDto);
    }

    @Delete(':id')
    @Roles(Role.Admin)
    async delete(@Param('id') id: number): Promise<void> {
        await this.studantService.delete(id);
    }

    @Put()
    @Roles(Role.Admin)
    @UsePipes(ValidationPipe)
    async update(@Body() studantDto: StudantDto): Promise<Studant> {
        return await this.studantService.update(studantDto);
    }
}
