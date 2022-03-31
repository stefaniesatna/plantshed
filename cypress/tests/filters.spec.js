describe("Filters", () => {
  it("Should have a default state of unselected", () => {
    cy.visit("/coffee");
    cy.get("[data-cy=filterCheckbox]").each(($checkbox) => {
      cy.get($checkbox).should("not.be.checked");
    });
  });

  it("Should have selected state when clicked", () => {
    cy.visit("/coffee");
    cy.get("[data-cy=filterCheckbox]").each(($checkbox) => {
      cy.get($checkbox).should("not.be.checked");
    });
    cy.get("[data-cy=filterCheckbox]").each(($checkbox) => {
      cy.get($checkbox).check().should("be.checked");
    });
  });
});
