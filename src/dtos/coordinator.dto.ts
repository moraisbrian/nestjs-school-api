import { CourseDto } from "./course.dto";
import { IsNotEmpty, IsString } from 'class-validator';

export class CoordinatorDto {
    id: number;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    courses: CourseDto[];
    createdAt?: Date;
    updatedAt?: Date;
}