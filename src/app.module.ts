import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { DatabaseModule } from './modules/database.module';
import { CoordinatorModule } from './modules/coordinator.module';
import { CourseModule } from './modules/course.module';
import { StudentModule } from './modules/student.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule, 
    CoordinatorModule,
    CourseModule,
    StudentModule
  ],
  controllers: [AppController]
})
export class AppModule {}
