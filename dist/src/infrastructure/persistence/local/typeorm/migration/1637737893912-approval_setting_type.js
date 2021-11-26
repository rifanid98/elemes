"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approvalSettingType1637737893912 = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const data_1 = require("../seeder/data");
class approvalSettingType1637737893912 {
    async up(queryRunner) {
        await (0, typeorm_1.getRepository)(entity_1.ApprovalSettingType).save(data_1.approvalSettingTypes);
    }
    async down(queryRunner) {
        return null;
    }
}
exports.approvalSettingType1637737893912 = approvalSettingType1637737893912;
//# sourceMappingURL=1637737893912-approval_setting_type.js.map