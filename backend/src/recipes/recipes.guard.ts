import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { secret } from '../secret'
import { verify } from 'jsonwebtoken'

@Injectable()
export class RecipesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context)
    const request = ctx.getContext().request
    const token = request.cookies.token

    if (token) {
      const { email } = verify(token, secret)

      return !!email
    }
  }
}
