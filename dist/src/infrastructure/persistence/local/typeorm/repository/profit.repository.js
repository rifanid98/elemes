"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfitLocalRepository = void 0;
const profit_repository_1 = require("../../../../../domain/repository/profit.repository");
const typeorm_1 = require("typeorm");
const profit_entity_1 = require("../entity/profit.entity");
const sales_dto_1 = require("../../../../../domain/dto/sales.dto");
let ProfitLocalRepository = class ProfitLocalRepository extends typeorm_1.Repository {
    createProfit(profit) {
        return this.save(profit);
    }
    getAllProfits(query) {
        const isRangeDate = query.date1 && query.date2;
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
    getOneProfit(profit) {
        return this.findOne(profit);
    }
    getProfitById(id) {
        return this.findOne(id);
    }
    async updateProfit(profit) {
        const updateresult = await this.update(profit.id, profit);
        return updateresult.affected > 0;
    }
};
ProfitLocalRepository = __decorate([
    (0, typeorm_1.EntityRepository)(profit_entity_1.Profit)
], ProfitLocalRepository);
exports.ProfitLocalRepository = ProfitLocalRepository;
//# sourceMappingURL=profit.repository.js.map