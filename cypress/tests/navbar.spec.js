describe("Navbar", () => {
  it("Should have the correct text", () => {
    cy.visit("/");
    cy.get("[data-cy=coffeeLink]").should("have.text", "Coffee");
    cy.get("[data-cy=plantsLink]").should("have.text", "Plants");
    cy.get("[data-cy=aboutLink]").should("have.text", "About");
    cy.get("[data-cy=loginLink]").should("have.text", "Login");
  });

  it("Should navigate to the correct place", () => {
    cy.visit("/");
    cy.get("[data-cy=coffeeLink]")
      .click()
      .url()
      .should("eq", "http://localhost:3001/coffee");

    cy.get("[data-cy=plantsLink]")
      .click()
      .url()
      .should("eq", "http://localhost:3001/plants");

    cy.get("[data-cy=aboutLink]")
      .click()
      .url()
      .should("eq", "http://localhost:3001/about");

    cy.get("[data-cy=homeLink]")
      .click()
      .url()
      .should("eq", "http://localhost:3001/");

    cy.get("[data-cy=checkoutLink]")
      .click()
      .url()
      .should("eq", "http://localhost:3001/checkout");

    cy.get("[data-cy=loginLink]")
      .click()
      .url()
      .should("eq", "http://localhost:3001/login");
  });
});
