import { CourseDto } from "./course.dto";
import { ArrayNotEmpty, IsNotEmpty, IsString } from 'class-validator';

export class ClassRoomDto {
    id: number;

    @IsNotEmpty()
    @IsString()
    identification: string;

    courses: CourseDto[];

    @ArrayNotEmpty()
    courseIds: number[];

    createdAt?: Date;
    updatedAt?: Date;
}