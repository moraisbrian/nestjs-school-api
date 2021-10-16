import { Coordinator } from "src/entities/coordinator.entity";

export const coordinatorProviders = [
    {
        provide: 'COORDINATOR_REPOSITORY',
        useValue: Coordinator
    }
]