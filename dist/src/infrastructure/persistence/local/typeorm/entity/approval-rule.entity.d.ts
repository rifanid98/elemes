import { ApprovalRuleEntityInterface } from 'domain/entity/approval-rule.entity';
import { ApprovalListDetail, User } from '.';
export declare class ApprovalRule implements ApprovalRuleEntityInterface {
    id?: number;
    name?: string;
    approval_rule_type_name?: string;
    request_type?: string;
    value?: string;
    position_order?: number;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    approval_rule_type?: number;
    approval_setting?: number;
    approval_list_details?: ApprovalListDetail;
}
