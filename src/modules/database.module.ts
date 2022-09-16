import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Dialect } from 'sequelize';
import { models } from '../models';

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async () => ({
                dialect: <Dialect>process.env.DATABASE_DIALECT,
                host: process.env.DATABASE_HOST,
                port: +process.env.DATABASE_PORT,
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                autoLoadModels: true,
                synchronize: false,
                models: models
            })
        })
    ],
    exports: [
        SequelizeModule
    ]
})
export class DatabaseModule { }
