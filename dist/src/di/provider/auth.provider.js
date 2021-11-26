"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = void 0;
const auth_interactor_1 = require("../../usecase/auth/auth.interactor");
const auth_presenter_1 = require("../../adapter/presenter/auth.presenter");
const authenticator_1 = require("../../sharedkernel/authenticator");
const security_1 = require("../../sharedkernel/security");
exports.AuthProvider = [
    {
        provide: 'AuthUseCase',
        useClass: auth_interactor_1.AuthInteractor,
    },
    {
        provide: 'AuthPresenterInterface',
        useClass: auth_presenter_1.AuthPresenter,
    },
    {
        provide: 'AuthenticatorInterface',
        useClass: authenticator_1.Authenticator,
    },
    {
        provide: 'SecurityInterface',
        useClass: security_1.Security,
    },
];
//# sourceMappingURL=auth.provider.js.map