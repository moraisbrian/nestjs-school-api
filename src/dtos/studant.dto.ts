import { CourseDto } from "./course.dto";
import { IsNotEmpty, IsString } from 'class-validator';

export class StudantDto {
    id: number;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    courseId: number;
    course: CourseDto;
    createdAt: Date;
    updatedAt: Date;
}