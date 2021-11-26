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
exports.RoleMenu = void 0;
const role_menu_entity_1 = require("../../../../../domain/entity/role-menu.entity");
const typeorm_1 = require("typeorm");
const _1 = require(".");
const class_transformer_1 = require("class-transformer");
let RoleMenu = class RoleMenu {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RoleMenu.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoleMenu.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.role_menus, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", _1.User)
], RoleMenu.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.role_menus, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", _1.User)
], RoleMenu.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.role_menus, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_by' }),
    __metadata("design:type", _1.User)
], RoleMenu.prototype, "deleted_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RoleMenu.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RoleMenu.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], RoleMenu.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Menu, (menu) => menu.role_menus, { eager: false }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", _1.Menu)
], RoleMenu.prototype, "menu", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Role, (role) => role.role_menus, { eager: false }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", _1.Role)
], RoleMenu.prototype, "role", void 0);
RoleMenu = __decorate([
    (0, typeorm_1.Entity)()
], RoleMenu);
exports.RoleMenu = RoleMenu;
//# sourceMappingURL=role-menu.entity.js.map