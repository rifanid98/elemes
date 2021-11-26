"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
exports.CloudinaryProvider = {
    provide: 'CLOUDINARY',
    useFactory: () => {
        return cloudinary_1.v2.config({
            cloud_name: 'your_cloud_name',
            api_key: 'your_api_key',
            api_secret: 'your_api_secret',
        });
    },
};
//# sourceMappingURL=cloudinary.provider.js.map