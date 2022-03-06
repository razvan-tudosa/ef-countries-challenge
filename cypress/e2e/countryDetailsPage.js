describe("Country Details Page", () => {
  beforeEach(() => {
    cy.visit("/country/Switzerland");
  });

  it("should be able to go back to homepage", () => {
    cy.contains("Back").click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/");
    });
  });

  it("should be able to access border countries", () => {
    cy.contains("Germany").click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/country/Germany");
    });
  });
});
