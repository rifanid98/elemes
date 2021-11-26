/// <reference types="multer" />
import { Request } from 'express';
export declare const editFileName: (req: Request, file: Express.Multer.File, callback: any) => void;
export declare const imageFileFilter: (req: Request, file: Express.Multer.File, callback: any) => any;
export declare const sheetFileFilter: (req: Request, file: Express.Multer.File, callback: any) => any;
export declare const imagesFileFilter: (req: Request, file: Express.Multer.File, callback: any) => any;
interface FileMapper {
    file: Express.Multer.File;
    req: Request;
}
interface FilesMapper {
    files: Express.Multer.File[];
    req: Request;
}
export declare const fileMapper: ({ file, req }: FileMapper) => {
    originalname: string;
    filename: string;
    image_url: string;
};
export declare const filesMapper: ({ files, req }: FilesMapper) => {
    originalname: string;
    filename: string;
    image_url: string;
}[];
export {};
