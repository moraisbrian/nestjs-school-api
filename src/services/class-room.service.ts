import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ClassRoomDto } from 'src/dtos/class-room.dto';
import { ClassRoom } from 'src/models/class-room.model';
import { CourseClassRoom } from 'src/models/course-class-room.model';
import { Course } from 'src/models/course.model';

@Injectable()
export class ClassRoomService {
    constructor(
        @InjectModel(ClassRoom) private classRoomModel: typeof ClassRoom,
        @InjectModel(CourseClassRoom) private courseClassRoomModel: typeof CourseClassRoom
    ) {}

    async add(classRoomDto: ClassRoomDto): Promise<ClassRoom> {
        const transaction = await this.classRoomModel.sequelize.transaction();
        try {
            const classRoom = await this.classRoomModel.create({
                identification: classRoomDto.identification
            }, { transaction });

            for (let i = 0; i < classRoomDto.courseIds?.length; i++) {
                await this.courseClassRoomModel.create({
                    classRoomId: classRoom.id,
                    courseId: classRoomDto.courseIds[i]
                }, { transaction }); 
            }

            await transaction.commit();

            return await this.classRoomModel.findByPk(classRoom.id, { include: [Course] })
        } catch (ex) {
            await transaction.rollback();
            throw new HttpException(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
