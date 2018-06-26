const SERVER_ENDPOINT = "https://blurts-server.stage.mozaws.net";

context("Breaches", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });

  it("should have screenshots", () => {
    cy.fixture("breaches").should(breaches => {
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
    });
  });
});
