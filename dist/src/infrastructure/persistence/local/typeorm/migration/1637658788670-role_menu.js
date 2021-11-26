"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMenu1637658788670 = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const data_1 = require("../seeder/data");
class roleMenu1637658788670 {
    async up(queryRunner) {
        const menus = await (0, typeorm_1.getRepository)(entity_1.Menu).find();
        const roles = await (0, typeorm_1.getRepository)(entity_1.Role).find({ name: 'super admin' });
        if (menus.length < 1 || roles.length < 1) {
            return;
        }
        data_1.roleMenus.forEach((roleMenu, index) => {
            roleMenu.role = roles[0];
            roleMenu.menu = menus[index];
        });
        await (0, typeorm_1.getRepository)(entity_1.RoleMenu).save(data_1.roleMenus);
    }
    async down(queryRunner) { }
}
exports.roleMenu1637658788670 = roleMenu1637658788670;
//# sourceMappingURL=1637658788670-role_menu.js.map