"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ApprovalSettingPresenter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalSettingPresenter = void 0;
const approval_setting_entity_1 = require("../../domain/entity/approval-setting.entity");
const common_1 = require("@nestjs/common");
let ApprovalSettingPresenter = ApprovalSettingPresenter_1 = class ApprovalSettingPresenter extends approval_setting_entity_1.ApprovalSetting {
    show(entity) {
        const presenter = new ApprovalSettingPresenter_1();
        presenter.id = entity.id;
        presenter.name = entity.name;
        presenter.request_type_name = entity.request_type_name;
        presenter.approval_setting_type_name = entity.approval_setting_type_name;
        presenter.value = entity.value;
        presenter.auto_ascend = entity.auto_ascend;
        presenter.no_approval = entity.no_approval;
        presenter.position_order = entity.position_order;
        return presenter;
    }
    showAll(entity) {
        const presenter = new ApprovalSettingPresenter_1();
        Object.keys(entity).forEach((key) => {
            presenter[key] = entity[key];
        });
        return presenter;
    }
    json(entity) {
        return Object.assign({}, entity);
    }
};
ApprovalSettingPresenter = ApprovalSettingPresenter_1 = __decorate([
    (0, common_1.Injectable)()
], ApprovalSettingPresenter);
exports.ApprovalSettingPresenter = ApprovalSettingPresenter;
//# sourceMappingURL=approval-setting.presenter.js.map