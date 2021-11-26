"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Security = void 0;
const bcrypt = require("bcrypt");
class Security {
    async hash(value) {
        const salt = await bcrypt.genSalt();
        return bcrypt.hash(value, salt);
    }
    verify(plain, hashed) {
        return bcrypt.compare(plain, hashed);
    }
    clear(data) {
        const payload = Object.assign({}, data);
        delete payload.password;
        return payload;
    }
}
exports.Security = Security;
//# sourceMappingURL=security.js.map