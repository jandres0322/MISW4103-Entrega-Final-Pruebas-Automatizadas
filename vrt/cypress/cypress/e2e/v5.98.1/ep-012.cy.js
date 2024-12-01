const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const createPostScreen = require("../../support/screens/v5.98.1/create-post-screen");
const listPostScreen = require("../../support/screens/v5.98.1/list-post-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");


describe("EP-012: Crear un post con todos los campos diligenciados", () => {
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
      dashboardScreen.clickCreateNewPost();
      makeScreenShot.execute("createPostScreen");

      cy.log("WHEN: Escribiendo un post con todos los campos diligenciados");
      cy.fixture("create-post").then((data) => {
        createPostScreen.enterTitlePost(data.createPostValid.title);
        createPostScreen.enterDescriptionPost(data.createPostValid.description);
        createPostScreen.clickPageSettings();
        createPostScreen.enterExcerptPost(data.createPostValid.excerpt);
        createPostScreen.selectTag(data.createPostValid.tag);
        createPostScreen.clickPageSettings();
        createPostScreen.clickPublish();
        makeScreenShot.execute("afterCreatePost");
        createPostScreen.clickFinalReview();
        makeScreenShot.execute("finalReview");
        createPostScreen.clickConfirmCreatePost();
        createPostScreen.clickCloseModal();

        cy.log("THEN: Se debe validar que el post se haya creado correctamente");
        listPostScreen.validateTitleListPage(data.createPostValid.title);
        makeScreenShot.execute("validateListPost");
      });
    })
  });
});