import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CourseDto } from "src/dtos/course.dto";
import { Course } from "src/entities/course.entity";
import { CourseService } from "src/services/course.service";

@Controller('api/v1/courses')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Post()
    public async addCourse(@Body() courseDto: CourseDto): Promise<Course> {
        return await this.courseService.addCourse(courseDto);
    }

    @Get()
    public async getCourses(): Promise<Course[]> {
        return await this.courseService.getCourses();
    }

    @Get(':id')
    public async getCourseById(@Param() params): Promise<Course> {
        return await this.courseService.getCourseById(params.id);
    }
}