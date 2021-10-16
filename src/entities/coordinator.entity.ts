import { Table, Model, Column, UpdatedAt, CreatedAt, DataType, HasMany } from "sequelize-typescript";
import { Course } from "./course.entity";

@Table({
    tableName: 'Coordinator'
})
export class Coordinator extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    Id: number;

    @Column({
        allowNull: false,
        type: DataType.STRING(100)
    })
    Name: string;

    @Column({
        allowNull: false,
        type: DataType.STRING(100)
    })
    LastName: string;

    @Column({
        allowNull: false,
        type: DataType.STRING(100)
    })
    Email: string;

    @HasMany(() => Course)
    Courses: Course[];

    @Column
    @UpdatedAt
    UpdatedAt: Date;

    @Column
    @CreatedAt
    CreatedAt: Date;
}