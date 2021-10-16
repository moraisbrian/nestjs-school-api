import { Inject, Injectable } from "@nestjs/common";
import { CourseDto } from "src/dtos/course.dto";
import { Course } from "src/entities/course.entity";
import { Student } from "src/entities/student.entity";

@Injectable()
export class CourseService {
    constructor(@Inject('COURSE_REPOSITORY') private courseRepository: typeof Course) {}

    public async addCourse(courseDto: CourseDto): Promise<Course> {
        return await this.courseRepository.create({
            Identification: courseDto.Identification,
            Workload: courseDto.Workload,
            CoordinatorId: courseDto.CoordinatorId
        });
    }

    public async getCourses(): Promise<Course[]> {
        return await this.courseRepository.findAll({ include: Student });
    }

    public async getCourseById(id: number): Promise<Course> {
        return await this.courseRepository.findByPk(id, { include: Student });
    }
}