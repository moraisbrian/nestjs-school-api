import { Inject, Injectable } from "@nestjs/common";
import { StudentDto } from "src/dtos/student.dto";
import { Course } from "src/entities/course.entity";
import { Student } from "src/entities/student.entity";

@Injectable()
export class StudentService {
    constructor(@Inject('STUDENT_REPOSITORY') private studentRepository: typeof Student) {}

    public async getStudents(): Promise<Student[]> {
        return await this.studentRepository.findAll({ include: Course });
    } 

    public async addStudent(studentDto: StudentDto): Promise<Student> {
        return await this.studentRepository.create({
            Name: studentDto.Name,
            LastName: studentDto.LastName,
            Email: studentDto.Email,
            CourseId: studentDto.CourseId
        });
    }

    public async getStudentById(id: number): Promise<Student> {
        return await this.studentRepository.findByPk(id, { include: Course });
    }
}