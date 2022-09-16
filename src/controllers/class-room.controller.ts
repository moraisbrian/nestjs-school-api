import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enums/role.enum';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { ClassRoomDto } from 'src/dtos/class-room.dto';
import { ClassRoom } from 'src/models/class-room.model';
import { ClassRoomService } from 'src/services/class-room.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('api/v1/classroom')
export class ClassRoomController {
    constructor(private classRoomService: ClassRoomService) {}

    @Post()
    @Roles(Role.User)
    @UsePipes(ValidationPipe)
    async add(@Body() classRoomDto: ClassRoomDto): Promise<ClassRoom> {
        return this.classRoomService.add(classRoomDto);
    }
}
