import { RequestType } from 'domain/entity/request-type.entity';
export interface RequestTypeRepository {
    getAllRequestTypes(): Promise<RequestType[]>;
    getOneRequestType(approvalSetting: RequestType): Promise<RequestType>;
    getRequestTypeById(id: number): Promise<RequestType>;
    createRequestType(approvalSetting: RequestType): Promise<RequestType>;
    updateRequestType(approvalSetting: RequestType): Promise<boolean>;
    deleteRequestType(approvalSetting: RequestType): Promise<boolean>;
}
