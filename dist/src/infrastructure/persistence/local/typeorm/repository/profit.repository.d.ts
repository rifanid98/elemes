import { ProfitRepository } from 'domain/repository/profit.repository';
import { Repository } from 'typeorm';
import { Profit } from '../entity/profit.entity';
import { ProfitQueryDto } from 'domain/dto/sales.dto';
export declare class ProfitLocalRepository extends Repository<Profit> implements ProfitRepository {
    createProfit(profit: Profit): Promise<Profit>;
    getAllProfits(query?: ProfitQueryDto): Promise<Profit[]>;
    getOneProfit(profit: Profit): Promise<Profit>;
    getProfitById(id: number): Promise<Profit>;
    updateProfit(profit: Profit): Promise<boolean>;
}
