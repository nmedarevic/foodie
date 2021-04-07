import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { PlansModule } from './plans/plans.module'
import { join } from 'path'
import { UsersModule } from './users/users.module'
import { RecipesModule } from './recipes/recipes.module'

@Module({
  imports: [
    PlansModule,
    UsersModule,
    RecipesModule,
    GraphQLModule.forRoot({
      debug: false,
      typePaths: ['./src/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      context: ({ req }) => {
        return {
          request: req,
        }
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
