import { Optional } from "sequelize";
import { Column, Table, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Course } from "./course.model";

interface StudantAttributes {
    id: number;
    firstName: string;
    lastName: string;
    courseId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface StudantCreationAttributes extends Optional<StudantAttributes, 'id'> {}

@Table({
    tableName: 'Studant'
})
export class Studant extends Model<StudantAttributes, StudantCreationAttributes> {
    @Column({
        primaryKey: true,
        field: 'Id',
        autoIncrement: true
    })
    id: number;

    @Column({
        field: 'FirstName'
    })
    firstName: string;

    @Column({
        field: 'LastName'
    })
    lastName: string;

    @ForeignKey(() => Course)
    @Column({
        field: 'CourseId'
    })
    courseId: number;

    @BelongsTo(() => Course)
    course: Course;

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