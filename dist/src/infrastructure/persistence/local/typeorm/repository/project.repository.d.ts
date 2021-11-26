import { ProjectRepository } from 'domain/repository/project.repository';
import { Repository } from 'typeorm';
import { Project } from '../entity/project.entity';
import { CustomerQueryDto, NumberOfSalesQueryDto, ReportQueryDto, RevenueQueryDto } from 'domain/dto/sales.dto';
export declare class ProjectLocalRepository extends Repository<Project> implements ProjectRepository {
    getAllProjects(projects?: Project[]): Promise<Project[]>;
    getOneProject(project: Project): Promise<Project>;
    getProjectById(id: string): Promise<Project>;
    createProject(project: Project): Promise<Project>;
    updateProject(project: Project): Promise<boolean>;
    customer(query?: CustomerQueryDto): Promise<object>;
    revenue(query?: RevenueQueryDto): Promise<object>;
    numberOfSales(query?: NumberOfSalesQueryDto): Promise<object>;
    report(query?: ReportQueryDto): Promise<object>;
}
