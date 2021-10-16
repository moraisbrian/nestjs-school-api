import { BelongsTo, Column, CreatedAt, DataType, ForeignKey, HasMany, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Coordinator } from "./coordinator.entity";
import { Student } from "./student.entity";

@Table({
    tableName: 'Course'
})
export class Course extends Model {
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
    Identification: string;

    @Column({
        type: DataType.DOUBLE,
        allowNull: false
    })
    Workload: number;

    @HasMany(() => Student)
    Students: Student[];

    @ForeignKey(() => Coordinator)
    @Column
    CoordinatorId: number;

    @BelongsTo(() => Coordinator)
    Coordinator: Coordinator;

    @Column
    @UpdatedAt
    UpdatedAt: Date;

    @Column
    @CreatedAt
    CreatedAt: Date;
}