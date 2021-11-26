"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederInteractor = void 0;
const seeder_usecase_1 = require("./seeder.usecase");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const entity_1 = require("../../infrastructure/persistence/local/typeorm/entity");
const data_1 = require("../../infrastructure/persistence/local/typeorm/seeder/data");
const config_1 = require("@nestjs/config");
let SeederInteractor = class SeederInteractor {
    constructor(entityManager, config) {
        this.entityManager = entityManager;
        this.config = config;
    }
    async onApplicationBootstrap() {
        if (this.config.get('STAGE') === 'test') {
            await this.seed();
        }
        return;
    }
    async seed() {
        try {
            for (let i = 0; i < data_1.users.length; i++) {
                await this.entityManager.delete(entity_1.User, {
                    email: data_1.users[i].email,
                });
            }
            await Promise.all([
                this.entityManager.save(entity_1.User, data_1.users),
                this.entityManager.save(entity_1.Customer, data_1.customers),
                this.entityManager.save(entity_1.Employee, data_1.employees),
            ]);
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e.message);
        }
    }
};
SeederInteractor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        config_1.ConfigService])
], SeederInteractor);
exports.SeederInteractor = SeederInteractor;
//# sourceMappingURL=seeder.interactor.js.map