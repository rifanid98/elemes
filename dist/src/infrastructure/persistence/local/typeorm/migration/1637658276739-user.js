"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user1637658276739 = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const data_1 = require("../seeder/data");
class user1637658276739 {
    async up(queryRunner) {
        await (0, typeorm_1.getRepository)(entity_1.User).save(data_1.users);
    }
    async down(queryRunner) { }
}
exports.user1637658276739 = user1637658276739;
//# sourceMappingURL=1637658276739-user.js.map