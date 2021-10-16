import { Student } from "src/entities/student.entity";

export const studentProviders = [
    {
        provide: 'STUDENT_REPOSITORY',
        useValue: Student
    }
]