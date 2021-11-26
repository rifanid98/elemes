"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.position1637659717277 = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const data_1 = require("../seeder/data");
class position1637659717277 {
    async up(queryRunner) {
        await (0, typeorm_1.getRepository)(entity_1.Position).save(data_1.positions);
    }
    async down(queryRunner) { }
}
exports.position1637659717277 = position1637659717277;
//# sourceMappingURL=1637659717277-position.js.map