"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthLocalRepository = void 0;
const user_entity_1 = require("../../../../../domain/entity/user.entity");
const auth_repository_1 = require("../../../../../domain/repository/auth.repository");
const typeorm_1 = require("typeorm");
const user_entity_2 = require("../entity/user.entity");
let AuthLocalRepository = class AuthLocalRepository extends typeorm_1.Repository {
    signup(user) {
        return this.save(user);
    }
    signin(user) {
        delete user.created_at;
        delete user.deleted_at;
        delete user.updated_at;
        return this.findOne(user);
    }
};
AuthLocalRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_2.User)
], AuthLocalRepository);
exports.AuthLocalRepository = AuthLocalRepository;
//# sourceMappingURL=auth.repository.js.map