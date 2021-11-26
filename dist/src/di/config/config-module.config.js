"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigModuleConfig = void 0;
const schema_1 = require("../../sharedkernel/schema");
exports.ConfigModuleConfig = {
    envFilePath: [`.env.stage.${process.env.STAGE}`],
    validationSchema: schema_1.configValidationSchema,
};
//# sourceMappingURL=config-module.config.js.map