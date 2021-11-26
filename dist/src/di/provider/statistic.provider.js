"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticProvider = void 0;
const statistic_interactor_1 = require("../../usecase/statistic/statistic.interactor");
exports.StatisticProvider = [
    {
        provide: 'StatisticUsecase',
        useClass: statistic_interactor_1.StatisticInteractor,
    },
];
//# sourceMappingURL=statistic.provider.js.map