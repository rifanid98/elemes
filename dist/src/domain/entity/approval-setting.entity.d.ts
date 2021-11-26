export interface ApprovalSettingEntityInterface {
    id?: number;
    name?: string;
    request_type_name?: string;
    approval_setting_type_name?: string;
    value?: string;
    auto_ascend?: boolean;
    no_approval?: boolean;
    position_order?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
export declare class ApprovalSetting implements ApprovalSettingEntityInterface {
    id?: number;
    name?: string;
    request_type_name?: string;
    approval_setting_type_name?: string;
    value?: string;
    auto_ascend?: boolean;
    no_approval?: boolean;
    position_order?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
