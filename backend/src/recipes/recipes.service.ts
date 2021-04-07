import { Injectable } from '@nestjs/common'
import { Recipe } from '../graphql'
import { uuid } from 'uuidv4'

@Injectable()
export class RecipesService {
  private recipes: Array<Recipe> = [
    {
      id: uuid(),
      name: 'Vareniki',
      text:
        'Vareniki (варе́ники) are dumplings similar to Polish pierogi, that are traditional in Ukraine and Russia. There are several kinds of fillings, with mashed potatoes being the most classic.',
      image:
        'https://www.196flavors.com/wp-content/uploads/2020/06/vareniki-4-FP-300x300.jpeg',
    },
    {
      id: uuid(),
      name: 'Cevapi',
      text:
        'Cevapi are easy to make, grilled sausages from Southeastern Europe that burst with smoky flavor and are perfect for serving with flatbread and sliced onions.',
      image:
        'https://www.curiouscuisiniere.com/wp-content/uploads/2016/08/Cevapi-Grilled-Serbian-Sausages-7191.21.jpg',
    },
  ]

  findAll(): Recipe[] {
    return this.recipes
  }
}
