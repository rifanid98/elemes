/// <reference types="multer" />
import { CloudinaryService } from 'src/di/services';
export interface FileInterface {
    read<T>(fileUri: string): Promise<T[]>;
    exist(fileUri: string): Promise<boolean>;
    create(data: any, fileName: string): Promise<boolean>;
    delete(fileUri: string): Promise<boolean>;
    upload(file: Express.Multer.File): Promise<any>;
}
export declare class File implements FileInterface {
    private cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    read<T>(fileUri: string): Promise<T[]>;
    exist(fileUri: string): Promise<boolean>;
    create(data: any, fileName: string): Promise<boolean>;
    delete(fileUri: string): Promise<boolean>;
    upload(file: Express.Multer.File): Promise<any>;
}
