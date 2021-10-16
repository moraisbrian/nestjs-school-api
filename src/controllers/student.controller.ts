import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { StudentDto } from "src/dtos/student.dto";
import { Student } from "src/entities/student.entity";
import { StudentService } from "src/services/student.service";

@Controller('api/v1/students')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    public async getStudents(): Promise<Student[]> {
        return await this.studentService.getStudents();
    }

    @Get(':id')
    public async getStudentById(@Param() params): Promise<Student> {
        return await this.studentService.getStudentById(params.id);
    }

    @Post()
    public async addStudent(@Body() studentDto: StudentDto): Promise<Student> {
        return await this.studentService.addStudent(studentDto);
    }
}