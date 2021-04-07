import { UseGuards } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'
import { RecipesGuard } from './recipes.guard'
import { RecipesService } from './recipes.service'

@Resolver('Recipe')
@UseGuards(RecipesGuard)
export class RecipesResolver {
  constructor(
    private readonly recipesService: RecipesService // private readonly plansService: PlansService
  ) {}

  @Query('recipes')
  async recipes() {
    return this.recipesService.findAll()
  }
}
