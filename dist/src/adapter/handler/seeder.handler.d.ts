import { SeederUseCase } from 'usecase/seeder/seeder.usecase';
export declare class SeederHandler {
    private seeder;
    constructor(seeder: SeederUseCase);
    seed(): Promise<void>;
}
