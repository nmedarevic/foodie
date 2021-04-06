import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { PlansModule } from './plans/plans.module'
import { join } from 'path'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    PlansModule,
    UsersModule,
    GraphQLModule.forRoot({
      debug: false,
      typePaths: ['./src/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
