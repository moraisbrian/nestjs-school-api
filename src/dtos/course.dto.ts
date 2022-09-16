import { ClassRoomDto } from "./class-room.dto";
import { CoordinatorDto } from "./coordinator.dto";
import { StudantDto } from "./studant.dto";
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CourseDto {
    id: number;

    @IsNotEmpty()
    @IsString()
    identification: string;

    classRooms: ClassRoomDto[];
    classRoomIds: number[];
    studants: StudantDto[];

    @IsNotEmpty()
    @IsInt()
    coordinatorId: number;

    coordinator: CoordinatorDto;
    createdAt?: Date;
    updatedAt?: Date;
}