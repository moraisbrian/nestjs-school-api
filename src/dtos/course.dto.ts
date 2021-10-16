import { IsNotEmpty, MaxLength } from "class-validator";

export class CourseDto {
    Id: number;

    @MaxLength(100)
    Identification: string;

    Workload: number;

    @IsNotEmpty()
    CoordinatorId: number;
}