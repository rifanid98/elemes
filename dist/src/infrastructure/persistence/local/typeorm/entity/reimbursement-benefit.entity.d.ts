import { ReimbursementBenefitEntityInterface } from 'domain/entity/reimbursement-benefit.entity';
import { User } from '.';
export declare class ReimbursementBenefit implements ReimbursementBenefitEntityInterface {
    id?: number;
    name?: string;
    reimbursement_type_name?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    reimbursement_type?: number;
    reimbursement_request_details?: number;
}
