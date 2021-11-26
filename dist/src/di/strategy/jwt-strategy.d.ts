import { Strategy } from 'passport-jwt';
import { UserRepository } from 'domain/repository/user.repository';
import { JwtPayload } from 'sharedkernel/type';
import { User } from 'domain/entity/user.entity';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    private config;
    constructor(userRepository: UserRepository, config: ConfigService);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
