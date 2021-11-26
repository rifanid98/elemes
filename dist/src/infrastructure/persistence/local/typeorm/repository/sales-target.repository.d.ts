import { SalesTargetRepository } from 'domain/repository/sales-target.repository';
import { TargetQueryDto } from 'domain/dto/sales.dto';
import { Repository } from 'typeorm';
import { SalesTarget } from '../entity/sales-target.entity';
export declare class SalesTargetLocalRepository extends Repository<SalesTarget> implements SalesTargetRepository {
    createSalesTarget(profit: SalesTarget): Promise<SalesTarget>;
    getAllSalesTargets(query?: TargetQueryDto): Promise<SalesTarget[]>;
    getOneSalesTarget(profit: SalesTarget): Promise<SalesTarget>;
    getSalesTargetById(id: number): Promise<SalesTarget>;
    updateSalesTarget(profit: SalesTarget): Promise<boolean>;
}
