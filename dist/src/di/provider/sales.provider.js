"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesProvider = void 0;
const sales_interactor_1 = require("../../usecase/sales/sales.interactor");
const sales_presenter_1 = require("../../adapter/presenter/sales.presenter");
const file_1 = require("../../sharedkernel/file");
const date_1 = require("../../sharedkernel/date");
const security_1 = require("../../sharedkernel/security");
exports.SalesProvider = [
    {
        provide: 'SalesUseCase',
        useClass: sales_interactor_1.SalesInteractor,
    },
    {
        provide: 'SalesPresenterInterface',
        useClass: sales_presenter_1.SalesPresenter,
    },
    {
        provide: 'FileInterface',
        useClass: file_1.File,
    },
    {
        provide: date_1.Date,
        useClass: date_1.Date,
    },
    {
        provide: 'SecurityInterface',
        useClass: security_1.Security,
    },
];
//# sourceMappingURL=sales.provider.js.map