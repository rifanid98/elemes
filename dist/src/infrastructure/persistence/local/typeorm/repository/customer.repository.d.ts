import { CustomerRepository } from 'domain/repository/customer.repository';
import { Repository } from 'typeorm';
import { Customer } from '../entity/customer.entity';
export declare class CustomerLocalRepository extends Repository<Customer> implements CustomerRepository {
    getAllCustomers(customers?: Customer[]): Promise<Customer[]>;
    getOneCustomer(customer: Customer): Promise<Customer>;
    getCustomerById(id: number): Promise<Customer>;
    createCustomer(customer: Customer): Promise<Customer>;
    updateCustomer(customer: Customer): Promise<boolean>;
}
