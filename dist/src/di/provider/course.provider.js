"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseProvider = void 0;
const course_interactor_1 = require("../../usecase/course/course.interactor");
const course_presenter_1 = require("../../adapter/presenter/course.presenter");
const file_1 = require("../../sharedkernel/file");
exports.CourseProvider = [
    {
        provide: 'CourseUsecase',
        useClass: course_interactor_1.CourseInteractor,
    },
    {
        provide: 'CoursePresenterInterface',
        useClass: course_presenter_1.CoursePresenter,
    },
    {
        provide: file_1.File,
        useClass: file_1.File,
    },
];
//# sourceMappingURL=course.provider.js.map