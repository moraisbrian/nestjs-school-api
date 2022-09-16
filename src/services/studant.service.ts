import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StudantDto } from 'src/dtos/studant.dto';
import { Studant } from 'src/models/studant.model';

@Injectable()
export class StudantService {
    constructor(@InjectModel(Studant) private studantModel: typeof Studant) {}

    async findAll(): Promise<Studant[]> {
        return await this.studantModel.findAll();
    }

    async findById(id: number): Promise<Studant> {
        return await this.studantModel.findByPk(id);
    }

    async add(studantDto: StudantDto): Promise<Studant> {
        const studant = await this.studantModel.create({
            firstName: studantDto.firstName,
            lastName: studantDto.lastName,
            courseId: studantDto.courseId
        });
        return await studant.save();
    }

    async delete(id: number): Promise<void> {
        await this.studantModel.destroy({
            where: { id: id }
        });
    }

    async update(studantDto: StudantDto): Promise<Studant> {
        const studant = await this.studantModel.findByPk(studantDto.id);

        studant.firstName = studantDto.firstName;
        studant.lastName = studantDto.lastName;

        return await studant.save();
    }
}
