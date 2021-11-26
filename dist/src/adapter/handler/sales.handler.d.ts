/// <reference types="multer" />
import { SalesUseCase } from 'usecase/sales/sales.usecase';
import { CustomerQueryDto, NumberOfSalesQueryDto, ProfitQueryDto, ReportQueryDto, RevenueQueryDto, TargetQueryDto } from 'domain/dto/sales.dto';
import { Project } from 'domain/entity/project.entity';
import { MainLogger } from 'src/sharedkernel/nest/logger';
import { SecurityInterface } from 'src/sharedkernel/security';
import { User } from 'src/domain/entity/user.entity';
export declare class SalesHandler {
    private useCase;
    private logger;
    private security;
    private readonly context;
    constructor(useCase: SalesUseCase, logger: MainLogger, security: SecurityInterface);
    importProject(user: User, file: Express.Multer.File): Promise<Project[]>;
    importProfit(user: User, file: Express.Multer.File): Promise<any>;
    importTarget(user: User, file: Express.Multer.File): Promise<any>;
    customer(user: User, query?: CustomerQueryDto): Promise<object>;
    revenue(query: RevenueQueryDto): Promise<any>;
    profit(user: User, query: ProfitQueryDto): Promise<any>;
    numberOfSales(user: User, query: NumberOfSalesQueryDto): Promise<object>;
    target(query: TargetQueryDto): Promise<any>;
    report(user: User, query: ReportQueryDto): Promise<any>;
}
