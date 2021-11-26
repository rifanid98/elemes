import { ApprovalSetting } from 'src/domain/entity/approval-setting.entity';
export declare class ApprovalSettingDto implements ApprovalSetting {
    id?: number;
    name?: string;
    request_type_id?: number;
    approval_setting_type_id?: number;
    value?: string;
    auto_ascend?: boolean;
    no_approval?: boolean;
    position_order?: number;
}
