/// <reference types="multer" />
import { SalesPresenterInterface } from 'adapter/presenter/sales.presenter';
import { SalesUseCase } from './sales.usecase';
import { FileInterface } from 'sharedkernel/file';
import { CustomerLocalRepository, EmployeeLocalRepository, ProjectLocalRepository, SalesTargetLocalRepository, UserLocalRepository } from 'infrastructure/persistence/local/typeorm/repository';
import { Project } from 'infrastructure/persistence/local/typeorm/entity';
import { Date as DateHelper } from 'sharedkernel/date';
import { ProfitLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/profit.repository';
import { CustomerQueryDto, NumberOfSalesQueryDto, ProfitQueryDto, ReportQueryDto, RevenueQueryDto, TargetQueryDto } from 'domain/dto/sales.dto';
export declare class SalesInteractor implements SalesUseCase {
    private presenter;
    private file;
    private date;
    private userRepository;
    private customerRepository;
    private employeeRepository;
    private projectRepository;
    private profitRepository;
    private salesTargetRepository;
    constructor(presenter: SalesPresenterInterface, file: FileInterface, date: DateHelper, userRepository: UserLocalRepository, customerRepository: CustomerLocalRepository, employeeRepository: EmployeeLocalRepository, projectRepository: ProjectLocalRepository, profitRepository: ProfitLocalRepository, salesTargetRepository: SalesTargetLocalRepository);
    importProject(file?: Express.Multer.File): Promise<Project[]>;
    importProfit(file: Express.Multer.File): Promise<any>;
    importTarget(file: Express.Multer.File): Promise<any>;
    customer(query?: CustomerQueryDto): Promise<object>;
    revenue(query?: RevenueQueryDto): Promise<object>;
    profit(query?: ProfitQueryDto): Promise<any>;
    target(query?: TargetQueryDto): Promise<any>;
    numberOfSales(query?: NumberOfSalesQueryDto): Promise<object>;
    report(query?: ReportQueryDto): Promise<object>;
}
