/// <reference types="multer" />
import { CourseEntityInterface } from 'domain/entity/course.entity';
import { PriceLevel } from 'src/domain/dto/course.dto';
export declare class CourseConflictResponseBody {
    statusCode: number;
    message: string;
    error: string;
}
export declare class CourseRequestBody implements CourseEntityInterface {
    name?: string;
    category?: string;
    description?: string;
    rating?: number;
    bought?: number;
    price?: number;
    file?: Express.Multer.File;
}
export declare class CourseResponseBody implements CourseEntityInterface {
    id?: number;
    name?: string;
    category?: string;
    description?: string;
    rating?: number;
    bought?: number;
    price?: number;
    image?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
export declare class CourseFilter implements CourseEntityInterface {
    name?: string;
    category?: string;
    description?: string;
    rating?: number;
    bought?: number;
    price?: number;
    price_level: PriceLevel;
}
export declare class CourseNotFoundResponse {
    statusCode: number;
    message: string;
    error: string;
}
export declare class CourseFileRequestBody {
    file: string;
}
