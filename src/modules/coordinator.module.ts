import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoordinatorController } from 'src/controllers/coordinator.controller';
import { Coordinator } from 'src/models/coordinator.model';
import { CoordinatorService } from 'src/services/coordinator.service';

@Module({
    imports: [
        SequelizeModule.forFeature([Coordinator])
    ],
    providers: [CoordinatorService],
    controllers: [CoordinatorController]
})
export class CoordinatorModule { }
