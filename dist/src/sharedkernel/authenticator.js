"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticator = void 0;
const common_1 = require("@nestjs/common");
const speakeasy = require("speakeasy");
const QRCODE = require("qrcode");
let Authenticator = class Authenticator {
    generateSecret(options) {
        return speakeasy.generateSecret(options);
    }
    generateTotpToken(totpOptions) {
        return speakeasy.totp(totpOptions);
    }
    generateQrCodeUrl(url) {
        return new Promise((resolve, reject) => {
            QRCODE.toDataURL(url, (err, url) => {
                if (!err) {
                    resolve(url);
                }
                else {
                    reject(err);
                }
            });
        });
    }
    verify(totpVerifyOptions) {
        return speakeasy.totp.verify(totpVerifyOptions);
    }
};
Authenticator = __decorate([
    (0, common_1.Injectable)()
], Authenticator);
exports.Authenticator = Authenticator;
//# sourceMappingURL=authenticator.js.map