/// <reference types="multer" />
import { Course, CourseEntityInterface } from 'domain/entity/course.entity';
export declare class CourseDto implements Course {
    id?: number;
    name?: string;
    category?: string;
    description?: string;
    rating?: number;
    bought?: number;
    price?: number;
    image?: string;
    file?: Express.Multer.File;
}
export declare enum PriceLevel {
    HIGHEST = "highest",
    LOWEST = "lowest",
    FREE = "free"
}
export declare class CourseFilterDto implements CourseEntityInterface {
    name?: string;
    category?: string;
    description?: string;
    rating?: number;
    bought?: number;
    price?: number;
    price_level: PriceLevel;
}
