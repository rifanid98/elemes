"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesInteractor = void 0;
const common_1 = require("@nestjs/common");
const sales_presenter_1 = require("../../adapter/presenter/sales.presenter");
const file_1 = require("../../sharedkernel/file");
const typeorm_1 = require("@nestjs/typeorm");
const repository_1 = require("../../infrastructure/persistence/local/typeorm/repository");
const entity_1 = require("../../infrastructure/persistence/local/typeorm/entity");
const date_1 = require("../../sharedkernel/date");
const profit_repository_1 = require("../../infrastructure/persistence/local/typeorm/repository/profit.repository");
const sales_dto_1 = require("../../domain/dto/sales.dto");
let SalesInteractor = class SalesInteractor {
    constructor(presenter, file, date, userRepository, customerRepository, employeeRepository, projectRepository, profitRepository, salesTargetRepository) {
        this.presenter = presenter;
        this.file = file;
        this.date = date;
        this.userRepository = userRepository;
        this.customerRepository = customerRepository;
        this.employeeRepository = employeeRepository;
        this.projectRepository = projectRepository;
        this.profitRepository = profitRepository;
        this.salesTargetRepository = salesTargetRepository;
    }
    async importProject(file) {
        const fileUri = `${file.destination}/${file.filename}`;
        const sheetData = await this.file.read(fileUri);
        await this.file.delete(fileUri);
        let customers = [];
        let sales = [];
        sheetData.map((data) => {
            if (!customers.find((customer) => customer.name === data.customer)) {
                const customer = new entity_1.Customer();
                customer.name = data.customer;
                customers.push(customer);
            }
            if (!sales.find((employee) => employee.name === data.sales)) {
                const employee = new entity_1.Employee();
                employee.name = data.sales;
                sales.push(employee);
            }
        });
        customers = await this.customerRepository.getAllCustomers(customers);
        sales = await this.employeeRepository.getAllEmployees(sales);
        const projects = [];
        sheetData.map((data) => {
            const custTemp = customers.find((cust) => cust.name === data.customer);
            const project = new entity_1.Project();
            project.name = data.nama_proyek;
            project.customer_name = custTemp.name;
            project.customer = custTemp;
            project.description = data.keterangan;
            project.contract_start_date = this.date.localToSqlDate(data.tgl_kontrak);
            project.contract_end_date = this.date.localToSqlDate(data.tgl_akhir_kontrak);
            project.id = data.so;
            project.nominal = parseInt(data.nominal.replace('Rp', '').split(',').join(''));
            projects.push(project);
        });
        return await this.projectRepository.save(projects);
    }
    async importProfit(file) {
        const fileUri = `${file.destination}/${file.filename}`;
        const sheetData = await this.file.read(fileUri);
        await this.file.delete(fileUri);
        let sales = [];
        sheetData.map((data) => {
            if (!sales.find((employee) => employee.name === data.sales)) {
                const employee = new entity_1.Employee();
                employee.name = data.sales;
                sales.push(employee);
            }
        });
        sales = await this.employeeRepository.getAllEmployees(sales);
        const profits = [];
        sheetData.map((data) => {
            const salesTemp = sales.find((sales) => sales.name === data.sales);
            const profit = new entity_1.Profit();
            profit.date = this.date.localToSqlDate(data.date);
            profit.sales_name = data.sales;
            profit.sales = salesTemp;
            profit.nominal = parseInt(data.nominal.replace('Rp', '').split(',').join(''));
            profits.push(profit);
        });
        return await this.profitRepository.save(profits);
    }
    async importTarget(file) {
        const fileUri = `${file.destination}/${file.filename}`;
        const sheetData = await this.file.read(fileUri);
        await this.file.delete(fileUri);
        let sales = [];
        sheetData.map((data) => {
            if (!sales.find((employee) => employee.name === data.sales)) {
                const employee = new entity_1.Employee();
                employee.name = data.sales;
                sales.push(employee);
            }
        });
        sales = await this.employeeRepository.getAllEmployees(sales);
        const salesTargets = [];
        sheetData.map((data) => {
            const salesTemp = sales.find((sales) => sales.name === data.sales);
            const salesTarget = new entity_1.SalesTarget();
            salesTarget.date = this.date.localToSqlDate(data.date);
            salesTarget.sales_name = data.sales;
            salesTarget.sales = salesTemp;
            salesTarget.nominal = parseInt(data.nominal.replace('Rp', '').split(',').join(''));
            salesTargets.push(salesTarget);
        });
        return await this.salesTargetRepository.save(salesTargets);
    }
    customer(query) {
        query.date1 && (query.date1 = this.date.localToSqlDate(query.date1));
        query.date2 && (query.date2 = this.date.localToSqlDate(query.date2));
        return this.projectRepository.customer(query);
    }
    async revenue(query) {
        query.date1 && (query.date1 = this.date.localToSqlDate(query.date1));
        query.date2 && (query.date2 = this.date.localToSqlDate(query.date2));
        const revenue = (await this.projectRepository.revenue(query));
        const months = [];
        const sales = [];
        revenue.forEach((data) => {
            if (!months.includes(data.month)) {
                months.push(data.month);
            }
            if (!sales.includes(data.sales)) {
                sales.push(data.sales);
            }
        });
        const result = [];
        months.forEach((month, indexMonth) => {
            result.push({
                month: month.split('|').pop().trim(),
                sales: [],
                total: '0',
            });
            sales.forEach((_sales, indexSales) => {
                result[indexMonth].sales.push({ name: _sales, total: '0' });
                revenue.forEach((_revenue) => {
                    if (_revenue.month === month && _revenue.sales === _sales) {
                        result[indexMonth].sales[indexSales]['name'] = _revenue.sales;
                        result[indexMonth].sales[indexSales]['total'] = _revenue.total;
                        result[indexMonth].total = (parseInt(result[indexMonth].total) + parseInt(_revenue.total)).toString();
                    }
                });
            });
        });
        return result;
    }
    async profit(query) {
        query.date1 && (query.date1 = this.date.localToSqlDate(query.date1));
        query.date2 && (query.date2 = this.date.localToSqlDate(query.date2));
        const profits = await this.profitRepository.getAllProfits(query);
        const months = [];
        const sales = [];
        profits.forEach((profit) => {
            const month = this.date.getMonthFromSqlDate(profit.date);
            if (!months.includes(month)) {
                months.push(month);
            }
            if (!sales.includes(profit.sales_name)) {
                sales.push(profit.sales_name);
            }
        });
        const result = [];
        months.forEach((month, indexMonth) => {
            result.push({
                month: month,
                sales: [],
                total: '0',
            });
            sales.forEach((_sales, indexSales) => {
                result[indexMonth].sales.push({ name: _sales, total: '0' });
                profits.forEach((profit) => {
                    const profitMonth = this.date.getMonthFromSqlDate(profit.date);
                    if (profitMonth === month && profit.sales_name === _sales) {
                        result[indexMonth].sales[indexSales]['name'] = profit.sales_name;
                        result[indexMonth].sales[indexSales]['total'] =
                            profit.nominal.toString();
                        result[indexMonth].total = (parseInt(result[indexMonth].total) + profit.nominal).toString();
                    }
                });
            });
        });
        return result;
    }
    async target(query) {
        query.date1 && (query.date1 = this.date.localToSqlDate(query.date1));
        query.date2 && (query.date2 = this.date.localToSqlDate(query.date2));
        const targets = await this.salesTargetRepository.getAllSalesTargets(query);
        const months = [];
        const sales = [];
        targets.forEach((target) => {
            const month = this.date.getMonthFromSqlDate(target.date);
            if (!months.includes(month)) {
                months.push(month);
            }
            if (!sales.includes(target.sales_name)) {
                sales.push(target.sales_name);
            }
        });
        const result = [];
        months.forEach((month, indexMonth) => {
            result.push({
                month: month,
                sales: [],
                total: '0',
                ytd: '0',
            });
            sales.forEach((_sales, indexSales) => {
                result[indexMonth].sales.push({ name: _sales, total: '0' });
                targets.forEach((target) => {
                    const targetMonth = this.date.getMonthFromSqlDate(target.date);
                    if (targetMonth === month && target.sales_name === _sales) {
                        result[indexMonth].sales[indexSales]['name'] = target.sales_name;
                        result[indexMonth].sales[indexSales]['total'] =
                            target.nominal.toString();
                        result[indexMonth].total = (parseInt(result[indexMonth].total) + target.nominal).toString();
                    }
                });
                result[indexMonth].ytd =
                    indexMonth < 1
                        ? result[indexMonth].total
                        : (parseInt(result[indexMonth - 1].ytd) +
                            parseInt(result[indexMonth].total)).toString();
            });
        });
        return result;
    }
    async numberOfSales(query) {
        query.date1 && (query.date1 = this.date.localToSqlDate(query.date1));
        query.date2 && (query.date2 = this.date.localToSqlDate(query.date2));
        const numberOfSales = (await this.projectRepository.numberOfSales(query));
        const months = [];
        const sales = [];
        numberOfSales.forEach((data) => {
            if (!months.includes(data.month)) {
                months.push(data.month);
            }
            if (!sales.includes(data.sales)) {
                sales.push(data.sales);
            }
        });
        const result = [];
        months.forEach((month, indexMonth) => {
            result.push({
                month: month.split('|').pop().trim(),
                sales: [],
                total: '0',
            });
            sales.forEach((_sales, indexSales) => {
                result[indexMonth].sales.push({ name: _sales, total: '0' });
                numberOfSales.forEach((_numberOfSales) => {
                    if (_numberOfSales.month === month &&
                        _numberOfSales.sales === _sales) {
                        result[indexMonth].sales[indexSales]['name'] = _numberOfSales.sales;
                        result[indexMonth].sales[indexSales]['total'] =
                            _numberOfSales.total;
                        result[indexMonth].total = (parseInt(result[indexMonth].total) +
                            parseInt(_numberOfSales.total)).toString();
                    }
                });
            });
        });
        return result;
    }
    async report(query) {
        const profits = await this.profit(query);
        const targets = await this.target(query);
        query.date1 && (query.date1 = this.date.localToSqlDate(query.date1));
        query.date2 && (query.date2 = this.date.localToSqlDate(query.date2));
        const reports = (await this.projectRepository.report(query));
        const months = [];
        const sales = [];
        reports.forEach((data) => {
            if (!months.includes(data.month)) {
                months.push(data.month);
            }
            if (!sales.includes(data.sales)) {
                sales.push(data.sales);
            }
        });
        const result = [];
        months.forEach((month, indexMonth) => {
            const monthName = month.split('|')[1].trim();
            result.push({
                month: month.split('|').pop().trim(),
                sales: [],
            });
            const profit = profits.find((profit) => profit.month === monthName);
            const target = targets.find((target) => target.month === monthName);
            sales.forEach((_sales, indexSales) => {
                var _a, _b, _c, _d, _e, _f;
                result[indexMonth].sales.push({
                    name: _sales,
                    total: '0',
                    revenue: '0',
                    target: '0',
                    profit: '0',
                    number_of_sales: '0',
                });
                reports.forEach((report) => {
                    if (report.month === month && report.sales === _sales) {
                        result[indexMonth].sales[indexSales]['name'] = report.sales;
                        result[indexMonth].sales[indexSales]['revenue'] = report.revenue;
                        result[indexMonth].sales[indexSales]['number_of_sales'] =
                            report.number_of_sales;
                    }
                });
                result[indexMonth].sales[indexSales].profit =
                    (_c = (_b = (_a = profit === null || profit === void 0 ? void 0 : profit.sales) === null || _a === void 0 ? void 0 : _a.find((profitSales) => profitSales.name === _sales)) === null || _b === void 0 ? void 0 : _b.total) !== null && _c !== void 0 ? _c : '0';
                result[indexMonth].sales[indexSales].target =
                    (_f = (_e = (_d = target === null || target === void 0 ? void 0 : target.sales) === null || _d === void 0 ? void 0 : _d.find((targetSales) => targetSales.name === _sales)) === null || _e === void 0 ? void 0 : _e.total) !== null && _f !== void 0 ? _f : '0';
            });
        });
        return result;
    }
};
SalesInteractor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SalesPresenterInterface')),
    __param(1, (0, common_1.Inject)('FileInterface')),
    __param(3, (0, typeorm_1.InjectRepository)(repository_1.UserLocalRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(repository_1.CustomerLocalRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(repository_1.EmployeeLocalRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(repository_1.ProjectLocalRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(profit_repository_1.ProfitLocalRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(repository_1.SalesTargetLocalRepository)),
    __metadata("design:paramtypes", [Object, Object, date_1.Date,
        repository_1.UserLocalRepository,
        repository_1.CustomerLocalRepository,
        repository_1.EmployeeLocalRepository,
        repository_1.ProjectLocalRepository,
        profit_repository_1.ProfitLocalRepository,
        repository_1.SalesTargetLocalRepository])
], SalesInteractor);
exports.SalesInteractor = SalesInteractor;
//# sourceMappingURL=sales.interactor.js.map