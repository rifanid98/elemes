import { ProjectEmployeeEntityInterface } from 'domain/entity/project-employee.entity';
import { Employee, Project, User } from '.';
export declare class ProjectEmployee implements ProjectEmployeeEntityInterface {
    id?: string;
    project_name?: string;
    employee_name?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    project: Project;
    employee: Employee;
}
