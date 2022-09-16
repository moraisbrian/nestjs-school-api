import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CoordinatorDto } from 'src/dtos/coordinator.dto';
import { Coordinator } from 'src/models/coordinator.model';
import { Course } from 'src/models/course.model';

@Injectable()
export class CoordinatorService {
    constructor(@InjectModel(Coordinator) private coordinatorModel: typeof Coordinator) { }

    async add(coordinatorDto: CoordinatorDto): Promise<Coordinator> {
        const coordinator = await this.coordinatorModel.create<Coordinator>({
            firstName: coordinatorDto.firstName,
            lastName: coordinatorDto.lastName,
        });

        return await coordinator.save();
    }

    async findAll(): Promise<Coordinator[]> {
        return await this.coordinatorModel.findAll({ include: [Course] });
    }
}
