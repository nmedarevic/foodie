import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class UsersGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
