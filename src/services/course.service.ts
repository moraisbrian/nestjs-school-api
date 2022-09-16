import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CourseDto } from 'src/dtos/course.dto';
import { ClassRoom } from 'src/models/class-room.model';
import { CourseClassRoom } from 'src/models/course-class-room.model';
import { Course } from 'src/models/course.model';
import { Studant } from 'src/models/studant.model';

@Injectable()
export class CourseService {
    constructor(
        @InjectModel(Course) private courseModel: typeof Course,
        @InjectModel(CourseClassRoom) private courseClassRoomModel: typeof CourseClassRoom
    ) { }

    async add(courseDto: CourseDto): Promise<Course> {
        const transaction = await this.courseModel.sequelize.transaction();

        try {
            const course = await this.courseModel.create({
                identification: courseDto.identification,
                coordinatorId: courseDto.coordinatorId
            }, { transaction });

            for (let i = 0; i < courseDto.classRoomIds?.length; i++) {
                await this.courseClassRoomModel.create({
                    courseId: course.id,
                    classRoomId: courseDto.classRoomIds[i]
                }, { transaction });
            }

            await transaction.commit();

            return await this.courseModel.findByPk(course.id, { include: [ClassRoom] });
        } catch (ex) {
            await transaction.rollback();
            throw new HttpException(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async addClassRoom(id: number, courseDto: CourseDto): Promise<Course> {
        const transaction = await this.courseModel.sequelize.transaction();

        try {
            const course = await this.courseModel.findByPk(id, { include: [ClassRoom] });

            for (let i = 0; i < courseDto.classRoomIds.length; i++) {
                const finded = course.classRooms.find(c => c.id === courseDto.classRoomIds[i]);
                if (!finded) {
                    await this.courseClassRoomModel.create({
                        courseId: course.id,
                        classRoomId: courseDto.classRoomIds[i]
                    }, { transaction });
                }
            }

            await transaction.commit();

            return await this.courseModel.findByPk(course.id, { include: [ClassRoom] });
        } catch (ex) {
            await transaction.rollback();
            throw new HttpException(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async removeClassRoom(id: number, courseDto: CourseDto): Promise<Course> {
        const transaction = await this.courseModel.sequelize.transaction();

        try {
            const course = await this.courseModel.findByPk(id, { include: [ClassRoom] });

            for (let i = 0; i < courseDto.classRoomIds.length; i++) {
                const finded = course.classRooms.find(c => c.id === courseDto.classRoomIds[i]);
                if (finded) {
                    await this.courseClassRoomModel.destroy({
                        where: { 
                            classRoomId: courseDto.classRoomIds[i],
                            courseId: course.id
                        }, 
                        transaction
                    });
                }
            }

            await transaction.commit();

            return await this.courseModel.findByPk(course.id, { include: [ClassRoom] });
        } catch (ex) {
            await transaction.rollback();
            throw new HttpException(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async findAll(): Promise<Course[]> {
        return await this.courseModel.findAll({ include: [Studant, ClassRoom] });
    }
}
