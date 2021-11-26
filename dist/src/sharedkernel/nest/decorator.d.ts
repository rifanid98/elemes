export declare enum Role {
    Staff = "Staff",
    Admin = "Admin",
    SuperAdmin = "Super Admin"
}
export declare const GetUser: (...dataOrPipes: any[]) => ParameterDecorator;
export declare const Roles: (...roles: string[]) => import("@nestjs/common").CustomDecorator<string>;
