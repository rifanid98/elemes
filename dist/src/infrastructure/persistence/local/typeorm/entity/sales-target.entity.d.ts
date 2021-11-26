import { SalesTargetEntityInterface } from 'domain/entity/sales-target.entity';
import { Employee, User } from '.';
export declare class SalesTarget implements SalesTargetEntityInterface {
    id?: number;
    sales_name?: string;
    date?: string;
    nominal?: number;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    sales?: Employee;
}
