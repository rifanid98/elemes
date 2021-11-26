"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesMapper = exports.fileMapper = exports.imagesFileFilter = exports.sheetFileFilter = exports.imageFileFilter = exports.editFileName = void 0;
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = (0, path_1.extname)(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};
exports.editFileName = editFileName;
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new common_1.UnsupportedMediaTypeException('Only image files are allowed!'), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const sheetFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(xls|xlsx)$/)) {
        return callback(new common_1.UnsupportedMediaTypeException('Only spreadsheet/excel files are allowed!'), false);
    }
    callback(null, true);
};
exports.sheetFileFilter = sheetFileFilter;
const imagesFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
        return callback(new common_1.UnsupportedMediaTypeException('Only image files are allowed!'), false);
    }
    callback(null, true);
};
exports.imagesFileFilter = imagesFileFilter;
const fileMapper = ({ file, req }) => {
    const image_url = `${req.protocol}://${req.headers.host}/${file.path}`;
    return {
        originalname: file.originalname,
        filename: file.filename,
        image_url,
    };
};
exports.fileMapper = fileMapper;
const filesMapper = ({ files, req }) => {
    return files.map((file) => {
        const image_url = `${req.protocol}://${req.headers.host}/${file.path}`;
        return {
            originalname: file.originalname,
            filename: file.filename,
            image_url,
        };
    });
};
exports.filesMapper = filesMapper;
//# sourceMappingURL=util.js.map