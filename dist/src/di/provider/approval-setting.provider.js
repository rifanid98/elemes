"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalSettingProvider = void 0;
const approval_setting_interactor_1 = require("../../usecase/approval-setting/approval-setting.interactor");
const approval_setting_presenter_1 = require("../../adapter/presenter/approval-setting.presenter");
exports.ApprovalSettingProvider = [
    {
        provide: 'ApprovalSettingUseCase',
        useClass: approval_setting_interactor_1.ApprovalSettingInteractor,
    },
    {
        provide: 'ApprovalSettingPresenterInterface',
        useClass: approval_setting_presenter_1.ApprovalSettingPresenter,
    },
];
//# sourceMappingURL=approval-setting.provider.js.map