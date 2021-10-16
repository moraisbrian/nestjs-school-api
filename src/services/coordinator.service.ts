import { Inject, Injectable } from '@nestjs/common';
import { CoordinatorDto } from 'src/dtos/coordinator.dto';
import { Coordinator } from 'src/entities/coordinator.entity';
import { Course } from 'src/entities/course.entity';

@Injectable()
export class CoordinatorService {
    constructor(@Inject('COORDINATOR_REPOSITORY') private coordinatorRepository: typeof Coordinator) {}

    public async addCoordinator(coordinatorDto: CoordinatorDto): Promise<Coordinator> {
        return await this.coordinatorRepository.create({
            Name: coordinatorDto.Name,
            LastName: coordinatorDto.LastName,
            Email: coordinatorDto.Email
        });
    }

    public async getCoordinators(): Promise<Coordinator[]> {
        return await this.coordinatorRepository.findAll({ include: Course });
    }

    public async getCoordinatorById(id: number): Promise<Coordinator> {
        return await this.coordinatorRepository.findByPk(id, { include: Course });
    }
}
