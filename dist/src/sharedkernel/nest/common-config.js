"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageMulterOptions = exports.multerOptions = void 0;
const multer_1 = require("multer");
const util_1 = require("../util");
exports.multerOptions = {
    storage: (0, multer_1.diskStorage)({
        destination: './upload',
        filename: util_1.editFileName,
    }),
    fileFilter: util_1.sheetFileFilter,
};
exports.imageMulterOptions = {
    storage: (0, multer_1.diskStorage)({
        destination: './upload',
        filename: util_1.editFileName,
    }),
    fileFilter: util_1.imagesFileFilter,
};
//# sourceMappingURL=common-config.js.map