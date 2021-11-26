import { ProfitEntityInterface } from 'domain/entity/profit.entity';
import { Employee, User } from '.';
export declare class Profit implements ProfitEntityInterface {
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
