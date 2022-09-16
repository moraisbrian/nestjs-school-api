import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseController } from 'src/controllers/course.controller';
import { CourseClassRoom } from 'src/models/course-class-room.model';
import { Course } from 'src/models/course.model';
import { CourseService } from 'src/services/course.service';

@Module({
    imports: [
        SequelizeModule.forFeature([Course, CourseClassRoom])
    ],
    providers: [CourseService],
    controllers: [CourseController]
})
export class CourseModule {}
