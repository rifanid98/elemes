"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Date_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = void 0;
const common_1 = require("@nestjs/common");
let Date = Date_1 = class Date {
    localToSqlDate(date) {
        const localDate = date.split('/');
        if (localDate.length !== 3)
            return date;
        return `${Date_1.addZero(localDate[2])}-${Date_1.addZero(localDate[1])}-${Date_1.addZero(localDate[0])}`;
    }
    static addZero(value) {
        return value.length < 2 ? `0${value}` : value;
    }
    getMonthFromSqlDate(date) {
        const months = [
            {
                name: 'january',
                number: '01',
            },
            {
                name: 'february',
                number: '02',
            },
            {
                name: 'march',
                number: '03',
            },
            {
                name: 'april',
                number: '04',
            },
            {
                name: 'may',
                number: '05',
            },
            {
                name: 'june',
                number: '06',
            },
            {
                name: 'july',
                number: '07',
            },
            {
                name: 'august',
                number: '08',
            },
            {
                name: 'september',
                number: '09',
            },
            {
                name: 'october',
                number: '10',
            },
            {
                name: 'november',
                number: '11',
            },
            {
                name: 'desember',
                number: '12',
            },
        ];
        return months.find((month) => {
            return month.number === date.split('-')[1];
        }).name;
    }
};
Date = Date_1 = __decorate([
    (0, common_1.Injectable)()
], Date);
exports.Date = Date;
//# sourceMappingURL=date.js.map