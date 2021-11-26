"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMenu1637658493186 = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const data_1 = require("../seeder/data");
class roleMenu1637658493186 {
    async up(queryRunner) {
        await (0, typeorm_1.getRepository)(entity_1.Menu).save(data_1.menus);
    }
    async down(queryRunner) { }
}
exports.roleMenu1637658493186 = roleMenu1637658493186;
//# sourceMappingURL=1637658493186-menu.js.map