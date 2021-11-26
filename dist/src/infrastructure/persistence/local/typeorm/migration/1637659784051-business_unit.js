"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessUnit1637659784051 = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const data_1 = require("../seeder/data");
class businessUnit1637659784051 {
    async up(queryRunner) {
        await (0, typeorm_1.getRepository)(entity_1.BusinessUnit).save(data_1.businessUnits);
    }
    async down(queryRunner) { }
}
exports.businessUnit1637659784051 = businessUnit1637659784051;
//# sourceMappingURL=1637659784051-business_unit.js.map