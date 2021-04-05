import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class PlansGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
