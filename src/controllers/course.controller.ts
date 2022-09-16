import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enums/role.enum';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { CourseDto } from 'src/dtos/course.dto';
import { Course } from 'src/models/course.model';
import { CourseService } from 'src/services/course.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('api/v1/courses')
export class CourseController {
    constructor(private courseService: CourseService) {}

    @Post()
    @Roles(Role.Admin)
    @UsePipes(ValidationPipe)
    async add(@Body() courseDto: CourseDto): Promise<Course> {
        return this.courseService.add(courseDto);
    }

    @Get()
    @Roles(Role.User)
    async findAll(): Promise<Course[]> {
        return await this.courseService.findAll();
    }

    @Post(':id/add-classroom')
    @Roles(Role.Admin)
    async addClassRoom(@Param('id') id: number, @Body() courseDto: CourseDto): Promise<Course> {
        return this.courseService.addClassRoom(id, courseDto);
    }

    @Delete(':id/remove-classroom')
    @Roles(Role.Admin)
    async removeClassRoom(@Param('id') id: number, @Body() courseDto: CourseDto): Promise<Course> {
        return this.courseService.removeClassRoom(id, courseDto);
    }
}
