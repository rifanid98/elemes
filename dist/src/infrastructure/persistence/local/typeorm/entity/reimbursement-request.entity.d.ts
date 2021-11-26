import { ReimbursementRequestEntityInterface } from 'domain/entity/reimbursement-request.entity';
import { ReimbursementRequestDetail, User } from '.';
export declare class ReimbursementRequest implements ReimbursementRequestEntityInterface {
    id?: number;
    name?: string;
    reimbursement_type_name: string;
    notes?: string;
    file?: string;
    total?: number;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    reimbursement_type?: number;
    reimbursement_request_details: ReimbursementRequestDetail[];
}
