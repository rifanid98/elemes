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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederHandler = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const seeder_usecase_1 = require("../../usecase/seeder/seeder.usecase");
let SeederHandler = class SeederHandler {
    constructor(seeder) {
        this.seeder = seeder;
    }
    async seed() {
        return this.seeder.seed();
    }
};
__decorate([
    (0, common_1.Get)('/seed'),
    (0, swagger_1.ApiExcludeEndpoint)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeederHandler.prototype, "seed", null);
SeederHandler = __decorate([
    (0, common_1.Controller)('database'),
    (0, swagger_1.ApiTags)('Database'),
    __param(0, (0, common_1.Inject)('SeederUseCase')),
    __metadata("design:paramtypes", [Object])
], SeederHandler);
exports.SeederHandler = SeederHandler;
//# sourceMappingURL=seeder.handler.js.map