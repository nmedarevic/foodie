import cookie from 'cookie'
import {Section} from '../../components/Common/Section'
import { Recipe } from '../../components/Home/Recipe'
import { getRecipes } from '../../service/recipesService'
import styled from 'styled-components'

const Title = styled.div`
  width: 100%;
  height: 5%;
  font-size: 30px;
  text-align: center;
`

function Recipes (props: any) {
  return (
    <div className="w-screen h-screen">
      <Title>Available recipes</Title>
      <Section className='space-y-4'>
        {
          props.recipes.map(({name, text, image}: any) => (
            <Recipe key={name} name={name} text={text} image={image} />
          ))
        }
      </Section>
    </div>
  )
}

export default Recipes

export async function getServerSideProps({req}) {
  const recipes = await getRecipes(cookie.parse(req.headers.cookie))

  return {
    props: {
      recipes
    }
  }
}
