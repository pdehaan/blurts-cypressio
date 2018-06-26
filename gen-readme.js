const breaches = require("./cypress/fixtures/breaches.json");

console.log(
  `
# blurts-cypressio

Firefox Monitor tests using Cypress.io
`.trim()
);

console.log("\n\nDOMAIN | SCREENSHOT\n-------|-----------");
breaches.forEach(breach => {
  const [slug] = breach.LogoFilename.split(".");
  console.log(
    `${breach.Domain}<br/>${
      breach.Title
    } | ![](./cypress/screenshots/${slug}.png)`
  );
});
