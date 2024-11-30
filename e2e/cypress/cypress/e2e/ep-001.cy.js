const registerScreen = require("../support/screens/register-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");

describe("EP-001: Crear cuenta en Ghost con los campos diligenciados correctamente", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución", () => {

    cy.log("GIVEN: Cargando datos de usuario")
    cy.fixture("user-register").then((data) => {

      cy.log("WHEN: Ingresando datos de usuario en el formulario de registro");
      registerScreen.enterSiteTitle(data.userValidate.site);
      registerScreen.enterFullName(data.userValidate.name);
      registerScreen.enterEmailAddress(data.userValidate.email);
      registerScreen.enterPassword(data.userValidate.password);
      registerScreen.clickCreateAccount();

      cy.log("THEN: Valida que se redireccione a la página de dashboard");
      dashboardScreen.validateUrlDashboard();
      dashboardScreen.validateTitleSite(data.userValidate.site);
    });
  });
});
