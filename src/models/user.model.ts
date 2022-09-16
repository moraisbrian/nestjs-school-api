import { Optional } from "sequelize";
import { Column, CreatedAt, Table, UpdatedAt, Model } from "sequelize-typescript";

interface UserAttributes {
    id: number;
    username: string;
    password: string;
    roles: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table({
    tableName: 'User'
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
    @Column({
        primaryKey: true,
        field: 'Id',
        autoIncrement: true
    })
    id: number;

    @Column({
        field: 'Username'
    })
    username: string;

    @Column({
        field: 'Password'
    })
    password: string;

    @Column({
        field: 'Roles'
    })
    roles: string;

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