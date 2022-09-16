import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClassRoomController } from 'src/controllers/class-room.controller';
import { ClassRoom } from 'src/models/class-room.model';
import { CourseClassRoom } from 'src/models/course-class-room.model';
import { ClassRoomService } from 'src/services/class-room.service';

@Module({
    imports: [
        SequelizeModule.forFeature([ClassRoom, CourseClassRoom])
    ],
    providers: [
        ClassRoomService
    ],
    controllers: [ClassRoomController]
})
export class ClassRoomModule {}
