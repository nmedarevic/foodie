# foodie

A code challenge solution

# What is done:
# Frontend
* Uses NextJS and Apollo client
* Plan selection and plan submit
* View available recipes
* Tailwind used for speed. Styled component used only in one place
* Communicates with the server via GraphQl
* Contains all plan selection data in cookies

# Backend
* NestJS app
* Exposes a graphql API
* Contains all entities in memory
* No database attached
* Basic auth added for "recipes" endpoint
* Secret added to the repo not via external config
* Only one E2E test added. No unit tests

# How to run
While in root folder:
* Run `npm run build`
* After that run `npm run start`
