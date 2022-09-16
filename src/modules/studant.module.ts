import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Studant } from 'src/models/studant.model';
import { StudantService } from '../services/studant.service';
import { StudantController } from '../controllers/studant.controller';

@Module({
    imports: [
        SequelizeModule.forFeature([Studant])
    ],
    providers: [StudantService],
    controllers: [StudantController],
    exports: [SequelizeModule]
})
export class StudantModule {}
 