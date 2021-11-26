"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLocalRepository = void 0;
const user_repository_1 = require("../../../../../domain/repository/user.repository");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entity/user.entity");
let UserLocalRepository = class UserLocalRepository extends typeorm_1.Repository {
    createUser(user) {
        return this.save(user);
    }
    getAllUsers() {
        return this.find();
    }
    async getOneUser(user) {
        return this.findOne(user, {
            relations: ['role'],
        });
    }
    getUserById(user) {
        return this.findOne(user.id);
    }
    async updateUser(user) {
        const result = await this.update(user.id, user);
        return result.affected > 0;
    }
    async deleteUser(user) {
        const result = await this.softDelete(user.id);
        return result.affected > 0;
    }
    countUsers() {
        return this.count();
    }
};
UserLocalRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_1.User)
], UserLocalRepository);
exports.UserLocalRepository = UserLocalRepository;
//# sourceMappingURL=user.repository.js.map