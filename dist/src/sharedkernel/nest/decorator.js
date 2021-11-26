"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.GetUser = exports.Role = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../domain/entity/user.entity");
var Role;
(function (Role) {
    Role["Staff"] = "Staff";
    Role["Admin"] = "Admin";
    Role["SuperAdmin"] = "Super Admin";
})(Role = exports.Role || (exports.Role = {}));
exports.GetUser = (0, common_1.createParamDecorator)((_data, ctx) => {
    const http = ctx.switchToHttp();
    const req = http.getRequest();
    return req.user;
});
const Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Roles = Roles;
//# sourceMappingURL=decorator.js.map