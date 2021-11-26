"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectLocalRepository = void 0;
const project_repository_1 = require("../../../../../domain/repository/project.repository");
const typeorm_1 = require("typeorm");
const project_entity_1 = require("../entity/project.entity");
const sales_dto_1 = require("../../../../../domain/dto/sales.dto");
let ProjectLocalRepository = class ProjectLocalRepository extends typeorm_1.Repository {
    getAllProjects(projects) {
        if (projects && projects.length > 0) {
            return this.find({
                where: {
                    name: (0, typeorm_1.In)(projects.map((project) => project.name)),
                },
            });
        }
        else {
            return this.find();
        }
    }
    getOneProject(project) {
        return this.findOne(project);
    }
    getProjectById(id) {
        return this.findOne(id);
    }
    createProject(project) {
        return this.save(project);
    }
    async updateProject(project) {
        const updateresult = await this.update(project.id, project);
        return updateresult.affected > 0;
    }
    async customer(query) {
        const isRangeDate = query.date1 && query.date2;
        const sqlQuery = this.createQueryBuilder().select('DISTINCT(customer_name), count(customer_name)');
        if (isRangeDate) {
            sqlQuery.where('contract_start_date BETWEEN :date1 AND :date2', {
                date1: query.date1,
                date2: query.date2,
            });
        }
        return sqlQuery.groupBy('customer_name').getRawMany();
    }
    async revenue(query) {
        const isRangeDate = query.date1 && query.date2;
        const sqlQuery = this.createQueryBuilder('').select(`
        CASE 
          WHEN LENGTH(EXTRACT(MONTH FROM contract_start_date)::VARCHAR) = 1
          THEN '0' || EXTRACT (MONTH FROM contract_start_date) || '|' || TO_CHAR(contract_start_date, 'month')
          ELSE extract (MONTH FROM contract_start_date) || '|' || TO_CHAR(contract_start_date, 'month')
        END AS month,
        --sales_name,
        sum(nominal) AS total
      `);
        if (isRangeDate) {
            sqlQuery.where('contract_start_date BETWEEN :date1 AND :date2', {
                date1: query.date1,
                date2: query.date2,
            });
        }
        return sqlQuery.groupBy('month').orderBy('month').getRawMany();
    }
    async numberOfSales(query) {
        const isRangeDate = query.date1 && query.date2;
        const sqlQuery = this.createQueryBuilder('').select(`
        CASE 
          WHEN LENGTH(EXTRACT(MONTH FROM contract_start_date)::VARCHAR) = 1
          THEN '0' || EXTRACT (MONTH FROM contract_start_date) || '|' || TO_CHAR(contract_start_date, 'month')
          ELSE extract (MONTH FROM contract_start_date) || '|' || TO_CHAR(contract_start_date, 'month')
        END AS month,
        --sales_name,
        COUNT(id) AS total
      `);
        if (isRangeDate) {
            sqlQuery.where('contract_start_date BETWEEN :date1 AND :date2', {
                date1: query.date1,
                date2: query.date2,
            });
        }
        return sqlQuery.groupBy('month').orderBy('month').getRawMany();
    }
    report(query) {
        const isRangeDate = query.date1 && query.date2;
        const sqlQuery = this.createQueryBuilder('').select(`
        CASE 
          WHEN LENGTH(EXTRACT(MONTH FROM contract_start_date)::VARCHAR) = 1
          THEN '0' || EXTRACT (MONTH FROM contract_start_date) || '|' || TO_CHAR(contract_start_date, 'month')
          ELSE extract (MONTH FROM contract_start_date) || '|' || TO_CHAR(contract_start_date, 'month')
        END AS month,
        --sales_name,
        sum(nominal) AS revenue,
        count(id) AS number_of_sales
      `);
        if (isRangeDate) {
            sqlQuery.where('contract_start_date BETWEEN :date1 AND :date2', {
                date1: query.date1,
                date2: query.date2,
            });
        }
        return sqlQuery.groupBy('month').orderBy('month').getRawMany();
    }
};
ProjectLocalRepository = __decorate([
    (0, typeorm_1.EntityRepository)(project_entity_1.Project)
], ProjectLocalRepository);
exports.ProjectLocalRepository = ProjectLocalRepository;
//# sourceMappingURL=project.repository.js.map