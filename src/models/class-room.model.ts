import { Optional } from "sequelize";
import { BelongsToMany, Column, CreatedAt, Model, Table, UpdatedAt } from "sequelize-typescript";
import { CourseClassRoom } from "./course-class-room.model";
import { Course } from "./course.model";

interface ClassRoomAttributes{
    id: number;
    identification: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface ClassRoomCreationAttributes extends Optional<ClassRoomAttributes, 'id'> {}

@Table({
    tableName: 'ClassRoom'
})
export class ClassRoom extends Model<ClassRoomAttributes, ClassRoomCreationAttributes> {
    @Column({
        primaryKey: true,
        field: 'Id',
        autoIncrement: true
    })
    id: number;

    @Column({
        field: 'Identification'
    })
    identification: string;

    @BelongsToMany(() => Course, () => CourseClassRoom)
    courses: Course[];

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