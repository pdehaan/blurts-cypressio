context("Breaches", () => {
  beforeEach(() => {});

  it("should have screenshots", () => {
    cy.fixture("breaches").should(breaches => {
      const slug = "?breach=Adobe";
      cy.visit(`/${slug}`);
      cy.location().should(location => {
        expect(location.search).to.be.eq(slug);
      });
      cy.get("div.account").should("be.visible");
      cy.get("#banner-left")
        .first()
        .screenshot(`${slug}-clip`);

      // expect(Cypress.env('name')).to.eq("http://bingbong");
      /*
      breaches.forEach(breach => {
        const [slug] = breach.LogoFilename.split(".");

        cy.visit(`${SERVER_ENDPOINT}/?breach=${slug}`);
        // cy.location().should((location) => {
        //   expect(location.search).to.be.eq(`?breach=${slug}`);
        // });
        // cy.screenshot();
        cy.get("#banner-left")
          .first()
          .screenshot(slug, { blackout: ["div.aligner"] });
      });
      */
    });
  });
});
