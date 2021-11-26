import { EmployeeRepository } from 'domain/repository/employee.repository';
import { Repository } from 'typeorm';
import { Employee } from '../entity/employee.entity';
export declare class EmployeeLocalRepository extends Repository<Employee> implements EmployeeRepository {
    getAllEmployees(employees?: Employee[]): Promise<Employee[]>;
    getOneEmployee(employee: Employee): Promise<Employee>;
    getEmployeeById(id: number): Promise<Employee>;
    createEmployee(employee: Employee): Promise<Employee>;
    updateEmployee(employee: Employee): Promise<boolean>;
}
