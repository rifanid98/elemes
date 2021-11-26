import { ApprovalSettingTypeRepository } from 'domain/repository/approval-setting-type.repository';
import { Repository } from 'typeorm';
import { ApprovalSettingType } from '../entity';
export declare class ApprovalSettingTypeLocalRepository extends Repository<ApprovalSettingType> implements ApprovalSettingTypeRepository {
    getAllApprovalSettingTypes(): Promise<ApprovalSettingType[]>;
    getOneApprovalSettingType(approvalSetting: ApprovalSettingType): Promise<ApprovalSettingType>;
    getApprovalSettingTypeById(id: number): Promise<ApprovalSettingType>;
    createApprovalSettingType(approvalSetting: ApprovalSettingType): Promise<ApprovalSettingType>;
    updateApprovalSettingType(approvalSetting: ApprovalSettingType): Promise<boolean>;
    deleteApprovalSettingType(approvalSetting: ApprovalSettingType): Promise<boolean>;
}
