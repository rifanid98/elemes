import { ApprovalSettingDto } from 'domain/dto/approval-setting.dto';
import { ApprovalSetting } from 'infrastructure/persistence/local/typeorm/entity';
export interface ApprovalSettingUseCase {
    createApprovalSetting(approvalSetting: ApprovalSettingDto): Promise<ApprovalSetting>;
    getAllApprovalSettings(): Promise<ApprovalSetting[]>;
    updateApprovalSetting(approvalSetting: ApprovalSettingDto): Promise<boolean>;
    deleteApprovalSetting(approvalSettingDto: ApprovalSettingDto): Promise<boolean>;
}
