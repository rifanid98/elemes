/// <reference types="multer" />
import { Project } from 'domain/entity/project.entity';
import { Profit } from 'domain/entity/profit.entity';
import { CustomerQueryDto, NumberOfSalesQueryDto, ProfitQueryDto, ReportQueryDto, RevenueQueryDto, TargetQueryDto } from 'domain/dto/sales.dto';
export interface SalesUseCase {
    importProject(file?: Express.Multer.File): Promise<Project[]>;
    importProfit(file?: Express.Multer.File): Promise<Profit[]>;
    importTarget(file?: Express.Multer.File): Promise<Profit[]>;
    customer(query?: CustomerQueryDto): Promise<object>;
    revenue(query?: RevenueQueryDto): Promise<object>;
    profit(query?: ProfitQueryDto): Promise<any>;
    target(query?: TargetQueryDto): Promise<any>;
    numberOfSales(query?: NumberOfSalesQueryDto): Promise<object>;
    report(query?: ReportQueryDto): Promise<object>;
}
