import { Optional } from "sequelize";
import { Column, CreatedAt, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import { ClassRoom } from "./class-room.model";
import { Course } from "./course.model";

interface CourseClassRoomAttributes {
    id: number;
    courseId: number;
    classRoomId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface CourseClassRoomCreationAttributes extends Optional<CourseClassRoomAttributes, 'id'> {}

@Table({
    tableName: 'CourseClassRoom'
})
export class CourseClassRoom extends Model<CourseClassRoomAttributes, CourseClassRoomCreationAttributes> {
    @Column({
        primaryKey: true,
        field: 'Id',
        autoIncrement: true
    })
    id: number;

    @ForeignKey(() => Course)
    @Column({
        field: 'CourseId'
    })
    courseId: number;

    @ForeignKey(() => ClassRoom)
    @Column({
        field: 'ClassRoomId'
    })
    classRoomId: number;
    
    @CreatedAt
    @Column({
        field: 'CreatedAt'
    })
    createdAt?: Date;

    @UpdatedAt
    @Column({
        field: 'UpdatedAt'
    })
    updatedAt?: Date;
}