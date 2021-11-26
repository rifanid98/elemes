"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");
const buffer_1 = require("buffer");
const common_1 = require("@nestjs/common");
const services_1 = require("../di/services");
let File = class File {
    constructor(cloudinaryService) {
        this.cloudinaryService = cloudinaryService;
    }
    read(fileUri) {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(fileUri);
            const buffers = [];
            stream.on('data', (data) => {
                buffers.push(data);
            });
            stream.on('end', () => {
                const buffer = buffer_1.Buffer.concat(buffers);
                const workbook = XLSX.read(buffer, { type: 'buffer' });
                const data = [];
                for (let i = 0; i < workbook.SheetNames.length; i++) {
                    const temp = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[i]], { raw: false });
                    temp.forEach((res) => {
                        data.push(res);
                    });
                }
                resolve(data);
            });
            stream.on('error', (e) => {
                console.log(e);
                if (e === null || e === void 0 ? void 0 : e.message.toLowerCase().includes('eisdir')) {
                    reject(new common_1.InternalServerErrorException(`${e.message}. Maybe the file URI you provided is a folder, not a file`));
                }
                else {
                    reject(new common_1.InternalServerErrorException(e === null || e === void 0 ? void 0 : e.message));
                }
            });
        });
    }
    exist(fileUri) {
        const isExist = fs.existsSync(fileUri);
        return Promise.resolve(isExist);
    }
    async create(data, fileName) {
        return new Promise((resolve, reject) => {
            const baseUri = path.join(__dirname, '../../public');
            const fileUri = `${baseUri}/${fileName}`;
            const stream = fs.createWriteStream(fileUri);
            stream.write('This si some chunk data', async (error) => {
                if (error)
                    reject(error);
                const isExists = await this.exist(fileUri);
                isExists && resolve(true);
                resolve(false);
            });
        });
    }
    delete(fileUri) {
        return new Promise((resolve, reject) => {
            fs.unlink(fileUri, (error) => {
                if (error)
                    reject(error);
                resolve(true);
            });
        });
    }
    upload(file) {
        return this.cloudinaryService.uploadImage(file);
    }
};
File = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.CloudinaryService])
], File);
exports.File = File;
//# sourceMappingURL=file.js.map