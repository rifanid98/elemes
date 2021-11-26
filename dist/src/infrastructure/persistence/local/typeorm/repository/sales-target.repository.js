"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesTargetLocalRepository = void 0;
const sales_target_repository_1 = require("../../../../../domain/repository/sales-target.repository");
const sales_dto_1 = require("../../../../../domain/dto/sales.dto");
const typeorm_1 = require("typeorm");
const sales_target_entity_1 = require("../entity/sales-target.entity");
let SalesTargetLocalRepository = class SalesTargetLocalRepository extends typeorm_1.Repository {
    createSalesTarget(profit) {
        return this.save(profit);
    }
    getAllSalesTargets(query) {
        let isRangeDate = false;
        if (query.date1 && query.date2) {
            isRangeDate = true;
        }
        if (isRangeDate) {
            return this.find({
                where: {
                    date: (0, typeorm_1.Between)(query.date1, query.date2),
                },
            });
        }
        else {
            return this.find();
        }
    }
    getOneSalesTarget(profit) {
        return this.findOne(profit);
    }
    getSalesTargetById(id) {
        return this.findOne(id);
    }
    async updateSalesTarget(profit) {
        const updateresult = await this.update(profit.id, profit);
        return updateresult.affected > 0;
    }
};
SalesTargetLocalRepository = __decorate([
    (0, typeorm_1.EntityRepository)(sales_target_entity_1.SalesTarget)
], SalesTargetLocalRepository);
exports.SalesTargetLocalRepository = SalesTargetLocalRepository;
//# sourceMappingURL=sales-target.repository.js.map