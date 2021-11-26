import { ApprovalSettingUseCase } from 'usecase/approval-setting/approval-setting-use.case';
import { ApprovalSetting } from 'domain/entity/approval-setting.entity';
import { ApprovalSettingDto } from 'src/domain/dto/approval-setting.dto';
export declare class ApprovalSettingHandler {
    private useCase;
    constructor(useCase: ApprovalSettingUseCase);
    createApprovalSetting(approvalSetting: ApprovalSettingDto): Promise<ApprovalSetting>;
    getAllApprovalSettings(): Promise<ApprovalSetting[]>;
    updateApprovalSetting(id: number, approvalSetting: ApprovalSettingDto): Promise<boolean>;
    deleteApprovalSetting(id: number): Promise<boolean>;
}
