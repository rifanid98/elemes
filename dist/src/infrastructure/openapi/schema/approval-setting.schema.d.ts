import { ApprovalSetting } from 'domain/entity/approval-setting.entity';
export declare class ApprovalSettingResponseBody implements ApprovalSetting {
    id?: number;
    name?: string;
    request_type_id?: string;
    request_type_name?: string;
    approval_setting_type_id?: string;
    approval_setting_type_name?: string;
    value?: string;
    auto_ascend?: boolean;
    no_approval?: boolean;
    position_order?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
export declare class ApprovalSettingNotFoundResponseBody {
    statusCode: number;
    message: string;
    error: string;
}
