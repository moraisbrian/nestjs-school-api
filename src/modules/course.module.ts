import { Module } from '@nestjs/common';
import { CourseController } from 'src/controllers/course.controller';
import { courseProviders } from 'src/providers/course.providers';
import { CourseService } from 'src/services/course.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    providers: [
        CourseService,
        ...courseProviders
    ],
    controllers: [CourseController]
})
export class CourseModule {}