import { Employee } from 'domain/entity/employee.entity';
export interface EmployeeRepository {
    getAllEmployees(employees?: Employee[]): Promise<Employee[]>;
    getOneEmployee(employee: Employee): Promise<Employee>;
    getEmployeeById(id: number): Promise<Employee>;
    createEmployee(employee: Employee): Promise<Employee>;
    updateEmployee(employee: Employee): Promise<boolean>;
}
