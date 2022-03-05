describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should click on theme toggle and change it successfully", () => {
    cy.contains("Dark Mode").click().contains("Light Mode").should("exist");
  });

  it("should be able to filter countries", () => {
    cy.get(".card")
      .should("have.length", 250)
      .get("input")
      .type("switzerland")
      .get(".card")
      .should("have.length", 1);
  });

  it("should be able to filter by region", () => {
    cy.contains("Region").click();
    cy.contains("Europe").click();
    cy.get(".card", { timeout: 7000 }).should((elements) => {
      Array.from(elements).forEach((el) => {
        expect(el).to.contain("Europe");
      });
    });
  });

  it.only("should be able to filter by region", () => {
    cy.contains("Region").click();
    cy.contains("Europe").click();

    cy.get("input").type("Switzerland");

    cy.get(".card").should("have.length", 1);

    cy.contains("Region").click();
    cy.contains("Asia").click();

    cy.get(".card").should("have.length", 0);
  });
});
