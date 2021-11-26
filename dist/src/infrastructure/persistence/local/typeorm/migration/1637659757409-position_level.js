"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positionLevel1637659757409 = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const data_1 = require("../seeder/data");
class positionLevel1637659757409 {
    async up(queryRunner) {
        await (0, typeorm_1.getRepository)(entity_1.PositionLevel).save(data_1.positionLevels);
    }
    async down(queryRunner) { }
}
exports.positionLevel1637659757409 = positionLevel1637659757409;
//# sourceMappingURL=1637659757409-position_level.js.map