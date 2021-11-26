"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role1637658289330 = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const data_1 = require("../seeder/data");
class role1637658289330 {
    async up(queryRunner) {
        await (0, typeorm_1.getRepository)(entity_1.Role).save(data_1.roles);
    }
    async down(queryRunner) { }
}
exports.role1637658289330 = role1637658289330;
//# sourceMappingURL=1637658289330-role.js.map