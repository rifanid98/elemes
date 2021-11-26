import { ReimbursementRequestDetailEntityInterface } from 'domain/entity/reimbursement-request-detail.entity';
import { User } from '.';
export declare class ReimbursementRequestDetail implements ReimbursementRequestDetailEntityInterface {
    id?: number;
    name?: string;
    reimbursement_benefit_name?: string;
    request_amount?: number;
    paid_amount?: number;
    description?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    reimbursement_benefit: any;
    reimbursement_request: any;
}
