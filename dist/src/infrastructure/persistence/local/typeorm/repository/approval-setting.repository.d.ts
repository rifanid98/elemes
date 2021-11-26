import { ApprovalSettingRepository } from 'domain/repository/approval-setting.repository';
import { Repository } from 'typeorm';
import { ApprovalSetting } from '../entity';
export declare class ApprovalSettingLocalRepository extends Repository<ApprovalSetting> implements ApprovalSettingRepository {
    getAllApprovalSettings(): Promise<ApprovalSetting[]>;
    getOneApprovalSetting(approvalSetting: ApprovalSetting): Promise<ApprovalSetting>;
    getApprovalSettingById(id: number): Promise<ApprovalSetting>;
    createApprovalSetting(approvalSetting: ApprovalSetting): Promise<ApprovalSetting>;
    updateApprovalSetting(approvalSetting: ApprovalSetting): Promise<boolean>;
    deleteApprovalSetting(approvalSetting: ApprovalSetting): Promise<boolean>;
}
