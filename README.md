# Front-End Engineering Assessment 🏅

## Introdução

This is a challenge to test your Front-end knowledge;

The objective is to evaluate your way of structuring and autonomy in decisions to build something scalable using a modern JavaScript framework.


## Case

AstraMoon Pharmaceuticals is a biotech company dedicated to revolutionizing global health with advanced therapies. They focus on personalized medicine and space-based research, aiming to develop treatments for rare and chronic diseases using genomics, AI, and microgravity studies. Their mission is to advance science and medicine, making transformative therapies accessible worldwide.

Your objective in this project is to work on the development of the Front end that will consume the company's API, to list, filter and expand the available data.

## Resources

1. Study the RESTfull API documentation: https://randomuser.me/documentation
2. The tech stack to use must include any React.js framework (Vite, CRA, Next...)

## Clinical Record List

The initial screen of the project will be a list of patients that must contain a search engine to make it easier to filter all those displayed in the list, proposed:

![List users](assets/list.png)

To obtain the data, we will use the Random User API:

- https://randomuser.me/api/

In addition to making the request, we must apply some filters to the API:

- The API result must be stored in a global state. (MobX, Redux, Context, or equivalent technology of the framework used can be used)
- Limit each page request to 50 results to avoid overloading the API.
- Add pagination parameter to control `Loading more`

### Visualize Clinical Record

In the actions column of the table, there is a view button to expand the patient data. Follow the proposed model:


![View user](assets/view.png)

You must display the following patient fields:

- Imagem
- Nome completo
- Email
- Gênero
- Data de nascimento
- Telefone
- Nacionalidade
- Endereço
- ID (Número de identificação)
- URL para compartilhamento

## Techs and Skills Used
To Create this project i used the following techs and skills:
- JS + TS (Base Language)
- ReactJS + Vite (as Lib to make easy build)
- Chakra UI as UI Component Lib
- TailwindCss as auxiliar UI Lib
- React-Router-Dom to manage all route or navigation
- tanstack/react-query to Call Api or Network with Api
- @tanstack/react-table to give filter and advanced Table
- react-icons to give all icons
- ContextApi (To Manage our State management in the application)
- Git Workflow (commit message/structure and well-formed pull-requests)
- Live project deployment
- Project structure and architecture
- UI/UX Design Skills
- Design System
- ES6 syntax including arrow functions, destructuring and async/await
- Data sanitation and validation


## How it can work

In the this section, i'll show you how could you run app:

- **Clone this repo** [Medical Repo Link](https://github.com/Cientista-Avogadro/frontend-engineering-assessment-sebastiao-moniz);
- 1 - git clone [https://github.com/Cientista-Avogadro/frontend-engineering-assessment-sebastiao-moniz.git](https://github.com/Cientista-Avogadro/frontend-engineering-assessment-sebastiao-moniz)
- 2 - cd frontend-engineering-assessment-sebastiao-moniz
- 3 - npm install
- 4 - npm run dev
