import { ApprovalSettingType } from 'domain/entity/approval-setting-type.entity';
export interface ApprovalSettingTypeRepository {
    getAllApprovalSettingTypes(): Promise<ApprovalSettingType[]>;
    getOneApprovalSettingType(approvalSetting: ApprovalSettingType): Promise<ApprovalSettingType>;
    getApprovalSettingTypeById(id: number): Promise<ApprovalSettingType>;
    createApprovalSettingType(approvalSetting: ApprovalSettingType): Promise<ApprovalSettingType>;
    updateApprovalSettingType(approvalSetting: ApprovalSettingType): Promise<boolean>;
    deleteApprovalSettingType(approvalSetting: ApprovalSettingType): Promise<boolean>;
}
