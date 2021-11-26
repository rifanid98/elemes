import { ProjectEmployee } from 'domain/entity/project-employee.entity';
import { DeepPartial } from 'typeorm/common/DeepPartial';
import { SaveOptions } from 'typeorm/repository/SaveOptions';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';
declare type Entity = ObjectLiteral;
export interface ProjectEmployeeRepository {
    getAllProjectEmployees(projectEmployees?: ProjectEmployee[]): Promise<ProjectEmployee[]>;
    getOneProjectEmployee(projectEmployee: ProjectEmployee): Promise<ProjectEmployee>;
    getProjectEmployeeById(id: string): Promise<ProjectEmployee>;
    createProjectEmployee(projectEmployee: ProjectEmployee): Promise<ProjectEmployee>;
    updateProjectEmployee(projectEmployee: ProjectEmployee): Promise<boolean>;
    save<T extends DeepPartial<Entity>>(entities: T[], options?: SaveOptions): Promise<(T & Entity)[]>;
}
export {};
