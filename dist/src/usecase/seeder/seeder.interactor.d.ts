import { SeederUseCase } from 'usecase/seeder/seeder.usecase';
import { OnApplicationBootstrap } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { ConfigService } from '@nestjs/config';
export declare class SeederInteractor implements SeederUseCase, OnApplicationBootstrap {
    private readonly entityManager;
    private config;
    constructor(entityManager: EntityManager, config: ConfigService);
    onApplicationBootstrap(): Promise<any>;
    seed(): Promise<void>;
}
