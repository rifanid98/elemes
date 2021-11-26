import { RequestTypeRepository } from 'domain/repository/request-type.repository';
import { Repository } from 'typeorm';
import { RequestType } from '../entity';
export declare class RequestTypeLocalRepository extends Repository<RequestType> implements RequestTypeRepository {
    getAllRequestTypes(): Promise<RequestType[]>;
    getOneRequestType(approvalSetting: RequestType): Promise<RequestType>;
    getRequestTypeById(id: number): Promise<RequestType>;
    createRequestType(approvalSetting: RequestType): Promise<RequestType>;
    updateRequestType(approvalSetting: RequestType): Promise<boolean>;
    deleteRequestType(approvalSetting: RequestType): Promise<boolean>;
}
