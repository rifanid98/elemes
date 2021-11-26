"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestType1637659799371 = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const data_1 = require("../seeder/data");
class requestType1637659799371 {
    async up(queryRunner) {
        await (0, typeorm_1.getRepository)(entity_1.RequestType).save(data_1.requestTypes);
    }
    async down(queryRunner) {
        return null;
    }
}
exports.requestType1637659799371 = requestType1637659799371;
//# sourceMappingURL=1637659799371-request_type.js.map