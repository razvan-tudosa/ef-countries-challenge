describe("app", () => {
  it("should access home page, select a country and see details page", async () => {
    cy.visit("/").get("#ME").click().contains("Montenegro").should("exist");
  });
});
