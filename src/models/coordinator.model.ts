import { Optional } from "sequelize";
import { Column, Table, Model, CreatedAt, UpdatedAt, HasMany } from "sequelize-typescript";
import { Course } from "./course.model";

interface CoordinatorAttributes {
    id: number;
    firstName: string;
    lastName: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface CoordinatorCreationAttributes extends Optional<CoordinatorAttributes, 'id'> {}

@Table({
    tableName: 'Coordinator'
})
export class Coordinator extends Model<CoordinatorAttributes, CoordinatorCreationAttributes> {
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

    @HasMany(() => Course)
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