import { Profit } from 'domain/entity/profit.entity';
import { DeepPartial } from 'typeorm/common/DeepPartial';
import { SaveOptions } from 'typeorm/repository/SaveOptions';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';
import { ProfitQueryDto } from 'domain/dto/sales.dto';
declare type Entity = ObjectLiteral;
export interface ProfitRepository {
    getAllProfits(query?: ProfitQueryDto): Promise<Profit[]>;
    getOneProfit(profit: Profit): Promise<Profit>;
    getProfitById(id: number): Promise<Profit>;
    createProfit(profit: Profit): Promise<Profit>;
    updateProfit(profit: Profit): Promise<boolean>;
    save<T extends DeepPartial<Entity>>(entities: T[], options?: SaveOptions): Promise<(T & Entity)[]>;
}
export {};
