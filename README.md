# Cypress Starter Kit

A simple Cypress starter kit to save me, and hopefully you, time.

## Test Location

Tests can be found under `cypress/integration`.

See [Cypress Documentation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests) for an overview of the organization.

## Running Tests

To get the most up to date commands run `yarn run`.

For CI, it is recommended to us the command `cy:ci`:

### Run Specific Tests

You can run specific tests in two ways.

#### Test Name

```bash
# run all tests with "hello" in their title
yarn run cy:run --env grep=hello
# run all tests with "hello world" in their title
yarn run cy:run --env grep="hello world"
# run all tests WITHOUT "hello world" in their title
yarn run cy:run --env grep="-hello world"
```

#### Test Tag

In order to enable tags (Gherkin style) first you have to add the tags object to the test(s) you wish to annotate

```javascript
it(
  "displays two todo items by default",
  { tags: ["@jenkins", "@di2e"] },
  () => {
    cy.get(".todo-list li").should("have.length", 2);
    cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
    cy.get(".todo-list li").last().should("have.text", "Walk the dog");
  }
);
```

```bash
# enable the tests with tag "@jenkins" or "@gitlab"
yarn run cy:run--env grepTags="@jenkins @gitlab"
# enable the tests with both tags "@jenkins" and "@di2e"
yarn run cy:run--env grepTags="@jenkins+@di2e"
# enable the tests with "default" in the title and tag "jenkins"
yarn run cy:run--env grep=default,grepTags=@jenkins
```
