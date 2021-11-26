import { Customer } from 'domain/entity/customer.entity';
export interface CustomerRepository {
    getAllCustomers(customers?: Customer[]): Promise<Customer[]>;
    getOneCustomer(customer: Customer): Promise<Customer>;
    getCustomerById(id: number): Promise<Customer>;
    createCustomer(customer: Customer): Promise<Customer>;
    updateCustomer(customer: Customer): Promise<boolean>;
}
