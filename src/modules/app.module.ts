import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { CoordinatorModule } from './coordinator.module';
import { DatabaseModule } from './database.module';
import { StudantModule } from './studant.module';
import { CourseModule } from './course.module';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';
import { ClassRoomModule } from './class-room.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule, 
    StudantModule,
    CoordinatorModule,
    CourseModule,
    AuthModule,
    UserModule,
    ClassRoomModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
