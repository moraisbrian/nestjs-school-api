import { Sequelize } from 'sequelize-typescript';
import { Coordinator } from 'src/entities/coordinator.entity';
import { Course } from 'src/entities/course.entity';
import { Student } from 'src/entities/student.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: process.env.HOST_NAME,
                port: +process.env.DATABASE_PORT,
                username: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
            });
            sequelize.addModels([
                Coordinator,
                Course,
                Student
            ]);
            //await sequelize.sync({ force: true });
            //await sequelize.sync();
            return sequelize;
        },
    }
]