import { Module } from '@nestjs/common';
import { StudentController } from 'src/controllers/student.controller';
import { studentProviders } from 'src/providers/student.providers';
import { StudentService } from 'src/services/student.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...studentProviders,
        StudentService
    ],
    controllers: [
        StudentController
    ]
})
export class StudentModule {}