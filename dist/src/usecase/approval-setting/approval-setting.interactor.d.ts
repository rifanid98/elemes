import { ApprovalSettingDto } from 'domain/dto/approval-setting.dto';
import { ApprovalSettingUseCase } from 'usecase/approval-setting/approval-setting-use.case';
import { ApprovalSettingLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/approval-setting.repository';
import { ApprovalSettingPresenterInterface } from 'adapter/presenter';
import { ApprovalSettingTypeLocalRepository } from 'infrastructure/persistence/local/typeorm/repository';
import { RequestTypeLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/request-type.repository';
import { ApprovalSetting } from 'infrastructure/persistence/local/typeorm/entity';
export declare class ApprovalSettingInteractor implements ApprovalSettingUseCase {
    private presenter;
    private approvalSettingRepository;
    private approvalSettingTypeRepository;
    private requestTypeRepository;
    constructor(presenter: ApprovalSettingPresenterInterface, approvalSettingRepository: ApprovalSettingLocalRepository, approvalSettingTypeRepository: ApprovalSettingTypeLocalRepository, requestTypeRepository: RequestTypeLocalRepository);
    createApprovalSetting(approvalSetting: ApprovalSettingDto): Promise<ApprovalSetting>;
    getAllApprovalSettings(): Promise<ApprovalSetting[]>;
    updateApprovalSetting(approvalSetting: ApprovalSettingDto): Promise<boolean>;
    deleteApprovalSetting(approvalSettingDto: ApprovalSettingDto): Promise<boolean>;
}
