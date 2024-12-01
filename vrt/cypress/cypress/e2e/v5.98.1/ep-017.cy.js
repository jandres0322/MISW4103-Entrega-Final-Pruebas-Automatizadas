const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const listMemberScreen = require("../../support/screens/v5.98.1/list-member-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");


describe("EP-017: Crear miembro administrador de manera correcta", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución", () => {
    const makeScreenShot = new MakeScreenShot(Cypress.browser.name, Cypress.currentTest.titlePath);

    cy.log("GIVEN: Cargando datos de usuario e ingresando al dashboard");
    cy.fixture("user-login").then((data) => {
      makeScreenShot.execute("beforeLogin");
      loginScreen.enterEmail(data.userLogin.email);
      loginScreen.enterPassword(data.userLogin.password);
      loginScreen.clickSubmit();
      makeScreenShot.execute("afterLogin");
      dashboardScreen.validateUrlDashboard();
      dashboardScreen.validateTitleSite(data.userLogin.site);
      makeScreenShot.execute("validateDashboard");
      cy.wait(2000);
      dashboardScreen.clickListMember();
      makeScreenShot.execute("listMemberScreen");

      cy.log("WHEN: Ingresando datos invalidos del miembro");
      cy.fixture("user-register").then((data) => {
        makeScreenShot.execute("createMemberScreen");
        listMemberScreen.clickCreateAdminMember();

        cy.log("THEN: Se muestra mensaje de error");
        listMemberScreen.validateNameMember(data.userValidate.name);
        makeScreenShot.execute("createAdminMemberScreen");
      });

    })
  });
});