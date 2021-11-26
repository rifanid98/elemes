"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProvider = void 0;
const user_interactor_1 = require("../../usecase/user/user.interactor");
const user_presenter_1 = require("../../adapter/presenter/user.presenter");
const security_1 = require("../../sharedkernel/security");
const date_1 = require("../../sharedkernel/date");
exports.UserProvider = [
    {
        provide: 'UserUsecase',
        useClass: user_interactor_1.UserInteractor,
    },
    {
        provide: 'UserPresenterInterface',
        useClass: user_presenter_1.UserPresenter,
    },
    {
        provide: 'SecurityInterface',
        useClass: security_1.Security,
    },
    {
        provide: 'DateService',
        useClass: date_1.Date,
    },
];
//# sourceMappingURL=user.provider.js.map