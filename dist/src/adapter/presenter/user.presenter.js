"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserPresenter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPresenter = void 0;
const user_entity_1 = require("../../domain/entity/user.entity");
const common_1 = require("@nestjs/common");
let UserPresenter = UserPresenter_1 = class UserPresenter extends user_entity_1.User {
    show(entity) {
        const presenter = new UserPresenter_1();
        presenter.id = entity.id;
        presenter.email = entity.email;
        return presenter;
    }
};
UserPresenter = UserPresenter_1 = __decorate([
    (0, common_1.Injectable)()
], UserPresenter);
exports.UserPresenter = UserPresenter;
//# sourceMappingURL=user.presenter.js.map