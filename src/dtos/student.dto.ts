import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";

export class StudentDto {
    Id: number;

    @MaxLength(100)
    Name: string;

    @MaxLength(100)
    LastName: string;

    @MaxLength(100)
    @IsEmail()
    Email: string;

    @IsNotEmpty()
    CourseId: number;
}