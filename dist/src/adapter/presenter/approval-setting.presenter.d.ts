import { ApprovalSetting } from 'domain/entity/approval-setting.entity';
export interface ApprovalSettingPresenterInterface {
    show(entity: ApprovalSetting): ApprovalSetting;
    showAll(entity: ApprovalSetting): ApprovalSetting;
    json(entity: ApprovalSetting): ApprovalSetting;
}
export declare class ApprovalSettingPresenter extends ApprovalSetting implements ApprovalSettingPresenterInterface {
    show(entity: ApprovalSetting): ApprovalSetting;
    showAll(entity: ApprovalSetting): ApprovalSetting;
    json(entity: ApprovalSetting): ApprovalSetting;
}
