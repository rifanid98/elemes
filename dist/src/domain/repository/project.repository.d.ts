import { Project } from 'domain/entity/project.entity';
import { DeepPartial } from 'typeorm/common/DeepPartial';
import { SaveOptions } from 'typeorm/repository/SaveOptions';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';
import { CustomerQueryDto, NumberOfSalesQueryDto, ReportQueryDto, RevenueQueryDto } from 'domain/dto/sales.dto';
export interface Total {
    total: number;
}
declare type Entity = ObjectLiteral;
export interface ProjectRepository {
    getAllProjects(projects?: Project[]): Promise<Project[]>;
    getOneProject(project: Project): Promise<Project>;
    getProjectById(id: string): Promise<Project>;
    createProject(project: Project): Promise<Project>;
    updateProject(project: Project): Promise<boolean>;
    customer(query?: CustomerQueryDto): Promise<object>;
    revenue(query?: RevenueQueryDto): Promise<object>;
    numberOfSales(query?: NumberOfSalesQueryDto): Promise<object>;
    report(query?: ReportQueryDto): Promise<object>;
    save<T extends DeepPartial<Entity>>(entities: T[], options?: SaveOptions): Promise<(T & Entity)[]>;
}
export {};
