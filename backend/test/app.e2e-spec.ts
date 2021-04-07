import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { AppModule } from './../src/app.module'
import { INestApplication } from '@nestjs/common'

const plan = {
  user: {
    firstName: 'Nikola',
    lastName: 'Medarevic',
    email: 'mail@mail.com',
    address: {
      postal: 666,
      address: 'Adresa 1',
    },
  },
  plan: {
    firstDeliveryDay: 'Monday',

    mealsPerWeek: 3,
    planId: 0,
  },
}
describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  const submitPlan = `
    mutation createPlan {
      submitPlan(plan: {
        user:{
          firstName:"Nikola",
          lastName:"Medarevic",
          email:"mail@mail.com",
          address:{
            postal:666,
            address:"Adresa 1",
          }
        },
        plan:{
          firstDeliveryDay:"Monday",
          mealsPerWeek:3,
          planId: 0,
        }
      }) {
        response {
          id
          password
          data {
            email
            firstName
            lastName
            plan {
              planId
              firstDeliveryDay
              mealsPerWeek
              weeklyTotal
            }
          }
        }
      }
    }
  `
  const usersRequest = `
    query users{
      users {
        id
        data {
          plan{
            planId
            firstDeliveryDay
            weeklyTotal
            mealsPerWeek
          }
          firstName
          lastName
          address{
            address
            postalCode
          }
        }
      }
    }
  `

  it('create new user', async () => {
    await request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: usersRequest,
      })
      .expect(({ body }) => {
        const response = body.data.users

        expect(Array.isArray(response)).toBe(true)
        expect(response.length).toBe(0)
      })
      .expect(200)
    await request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: submitPlan,
      })
      .expect(({ body }) => {
        const response = body.data.submitPlan.response

        expect(response.id).toBeDefined()
      })
      .expect(200)
    await request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: usersRequest,
      })
      .expect(({ body }) => {
        const response = body.data.users

        expect(Array.isArray(response)).toBe(true)
        expect(response.length).toBe(1)
      })
      .expect(200)
  })
})
