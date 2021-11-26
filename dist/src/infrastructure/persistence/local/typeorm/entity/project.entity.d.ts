import { ProjectEntityInterface } from 'domain/entity/project.entity';
import { Customer, ProjectEmployee, User } from '.';
export declare class Project implements ProjectEntityInterface {
    id?: string;
    customer_name?: string;
    name?: string;
    description?: string;
    nominal?: number;
    contract_number_po?: string;
    contract_start_date?: string;
    contract_end_date?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    customer: Customer;
    project_employees: ProjectEmployee[];
}
