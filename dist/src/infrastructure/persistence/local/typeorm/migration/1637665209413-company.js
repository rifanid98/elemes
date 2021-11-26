"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.company1637665209413 = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const data_1 = require("../seeder/data");
class company1637665209413 {
    async up(queryRunner) {
        await (0, typeorm_1.getRepository)(entity_1.Company).save(data_1.companies);
    }
    async down(queryRunner) { }
}
exports.company1637665209413 = company1637665209413;
//# sourceMappingURL=1637665209413-company.js.map