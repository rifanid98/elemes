"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SalesPresenter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesPresenter = void 0;
const user_entity_1 = require("../../domain/entity/user.entity");
const common_1 = require("@nestjs/common");
let SalesPresenter = SalesPresenter_1 = class SalesPresenter extends user_entity_1.User {
    show(entity) {
        const presenter = new SalesPresenter_1();
        presenter.id = entity.id;
        presenter.email = entity.email;
        return presenter;
    }
    showAll(entity) {
        const presenter = new SalesPresenter_1();
        Object.keys(entity).forEach((key) => {
            presenter[key] = entity[key];
        });
        return presenter;
    }
    json(entity) {
        return Object.assign({}, entity);
    }
};
SalesPresenter = SalesPresenter_1 = __decorate([
    (0, common_1.Injectable)()
], SalesPresenter);
exports.SalesPresenter = SalesPresenter;
//# sourceMappingURL=sales.presenter.js.map