import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/modules/database.module';
import { CoordinatorService } from 'src/services/coordinator.service';
import { coordinatorProviders } from '../providers/coordinator.providers';
import { CoordinatorController } from '../controllers/coordinator.controller';

@Module({
    imports: [DatabaseModule],
    providers: [
        CoordinatorService,
        ...coordinatorProviders
    ],
    controllers: [CoordinatorController]
})
export class CoordinatorModule {}
