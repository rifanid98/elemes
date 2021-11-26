"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestTypeLocalRepository = void 0;
const request_type_repository_1 = require("../../../../../domain/repository/request-type.repository");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
let RequestTypeLocalRepository = class RequestTypeLocalRepository extends typeorm_1.Repository {
    getAllRequestTypes() {
        return this.find();
    }
    getOneRequestType(approvalSetting) {
        return this.findOne(approvalSetting);
    }
    getRequestTypeById(id) {
        return this.findOne(id);
    }
    createRequestType(approvalSetting) {
        return this.save(approvalSetting);
    }
    async updateRequestType(approvalSetting) {
        const result = await this.update(approvalSetting.id, approvalSetting);
        return result.affected > 0;
    }
    async deleteRequestType(approvalSetting) {
        const result = await this.delete(approvalSetting.id);
        return result.affected > 0;
    }
};
RequestTypeLocalRepository = __decorate([
    (0, typeorm_1.EntityRepository)(entity_1.RequestType)
], RequestTypeLocalRepository);
exports.RequestTypeLocalRepository = RequestTypeLocalRepository;
//# sourceMappingURL=request-type.repository.js.map