import { ApprovalSetting } from 'domain/entity/approval-setting.entity';
export interface ApprovalSettingRepository {
    getAllApprovalSettings(): Promise<ApprovalSetting[]>;
    getOneApprovalSetting(approvalSetting: ApprovalSetting): Promise<ApprovalSetting>;
    getApprovalSettingById(id: number): Promise<ApprovalSetting>;
    createApprovalSetting(approvalSetting: ApprovalSetting): Promise<ApprovalSetting>;
    updateApprovalSetting(approvalSetting: ApprovalSetting): Promise<boolean>;
    deleteApprovalSetting(approvalSetting: ApprovalSetting): Promise<boolean>;
}
