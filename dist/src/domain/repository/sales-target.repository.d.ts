import { SalesTarget } from 'domain/entity/sales-target.entity';
import { DeepPartial } from 'typeorm/common/DeepPartial';
import { SaveOptions } from 'typeorm/repository/SaveOptions';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';
import { TargetQueryDto } from 'domain/dto/sales.dto';
declare type Entity = ObjectLiteral;
export interface SalesTargetRepository {
    getAllSalesTargets(query?: TargetQueryDto): Promise<SalesTarget[]>;
    getOneSalesTarget(profit: SalesTarget): Promise<SalesTarget>;
    getSalesTargetById(id: number): Promise<SalesTarget>;
    createSalesTarget(profit: SalesTarget): Promise<SalesTarget>;
    updateSalesTarget(profit: SalesTarget): Promise<boolean>;
    save<T extends DeepPartial<Entity>>(entities: T[], options?: SaveOptions): Promise<(T & Entity)[]>;
}
export {};
