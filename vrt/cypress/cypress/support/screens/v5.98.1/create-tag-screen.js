class CreateTagScreen {

  elements = {
    nameInput: () => cy.get("#tag-name"),
    colorInput: () => cy.get('.input-color > input[name="accent-color"]'),
    slugInput: () => cy.get("#tag-slug"),
    descriptionInput: () => cy.get("#tag-description"),
    saveTagButton: () => cy.get("button[data-test-button='save']"),
    errorMessage: () => cy.get('.error > .response'),
    titleTag: () => cy.get('.gh-canvas-title')
  }

  enterName(name) {
    this.elements.nameInput().type(name);
  }

  enterColor(color) {
    this.elements.colorInput().type(color);
  }

  enterSlug(slug) {
    this.elements.slugInput().type(slug);
  }

  enterDescription(description) {
    this.elements.descriptionInput().type(description);
  }

  clickSaveTag() {
    this.elements.saveTagButton().click();
  }

  validateErrorMessage(message) {
    this.elements.errorMessage().should('contain', message);
  }

  validateTitleTag(title) {
    this.elements.titleTag().should('contain', title);
  }
}

module.exports = new CreateTagScreen();