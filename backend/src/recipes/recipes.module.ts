import { Module } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import { RecipesResolver } from './recipes.resolver'
import { RecipesService } from './recipes.service'

@Module({
  imports: [UsersService],
  providers: [RecipesService, RecipesResolver],
  exports: [RecipesService],
})
export class RecipesModule {}
