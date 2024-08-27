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

## Criteria
You will be assessed based on the following:
- Code quality
- Documentation (clear guidelines, README, JS Doc or other in-code documentation)
- Development strategy
- Git Workflow (commit message/structure and well-formed pull-requests)
- Unit Tests & Integration Tests
- Live project deployment
- Project structure and architecture
- UI/UX Design Skills
- Design System
- State management
- Proficiency in Javascript/Typescript
- ES6 syntax including arrow functions, destructuring and async/await
- Proper side effects handling, loading state, and errors
- Implement daily tools used daily in software development, such as linters, code formatting, Docker…
- Data sanitation and validation


## Extras

In addition to the challenge proposed with the two screens, we have some differences:

- **Differential 1** Add a filter by Gender in the table;
- **Differential 2** Configure the search engine to be able to filter by name and nationality;
- **Differential 3** Add the route pager to make it easier to share the link and maintain its position in the list;
- **Differential 4** Write Unit Tests or E2E Tests in the Patient List. Choosing the best approach and library;

## Readme from Repository

- Must contain the title of the project
- A description of the project in one sentence
- Must contain a list of language, framework and/or technologies used
- How to install and use the project (instructions)
- Don't forget [.gitignore](https://www.toptal.com/developers/gitignore)

---
---

## Interview Phases
#### 1st Phase
A brief 15min held with one of the recruiters to check if there is a match

#### 2nd Phase (Design System)
You will take a home test to be assessed based on your ability to produce high-quality software that is eligible and easy to work on.
Your communication skills will be assessed and you will have the opportunity to present and explain the decisions made along the way. Think of it like a roundtable where we will provide feedback and discuss other possible solutions.

#### 3rd Phase and the last one (Culture Fit)
You will interview directly with HR and Director for a culture interview in our office

#### 4th Phase, you have joined us! YAY!!!
