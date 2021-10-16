import { BelongsTo, Column, CreatedAt, DataType, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Course } from "./course.entity";

@Table({
    tableName: 'Student'
})
export class Student extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER
    })
    Id: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    Name: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    LastName: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    Email: string;

    @ForeignKey(() => Course)
    @Column
    CourseId: number;

    @BelongsTo(() => Course)
    Course: Course;

    @Column
    @UpdatedAt
    UpdatedAt: Date;

    @Column
    @CreatedAt
    CreatedAt: Date;
}