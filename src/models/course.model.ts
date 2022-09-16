import { Optional } from "sequelize";
import { BelongsTo, BelongsToMany, Column, CreatedAt, ForeignKey, HasMany, Model, Table, UpdatedAt } from "sequelize-typescript";
import { ClassRoom } from "./class-room.model";
import { Coordinator } from "./coordinator.model";
import { CourseClassRoom } from "./course-class-room.model";
import { Studant } from "./studant.model";

interface CourseAttributes {
    id: number;
    identification: string;
    coordinatorId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface CourseCreationAttributes extends Optional<CourseAttributes, 'id'> {}

@Table({
    tableName: 'Course'
})
export class Course extends Model<CourseAttributes, CourseCreationAttributes> {
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

    @BelongsToMany(() => ClassRoom, () => CourseClassRoom)
    classRooms: ClassRoom[];

    @HasMany(() => Studant)
    studants: Studant[];

    @ForeignKey(() => Coordinator)
    @Column({
        field: 'CoordinatorId'
    })
    coordinatorId: number;

    @BelongsTo(() => Coordinator)
    coordinator: Coordinator;

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