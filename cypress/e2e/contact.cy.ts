describe("ContactPage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/contact");
  });

  it("should display the contact form", () => {
    cy.contains("h2", "Get in touch").should("be.visible");
    cy.get(`[data-test="contact-email-input-mobile"]`).should(`be.visible`);
    cy.get(`[data-test="contact-message-input-mobile"]`).should(`be.visible`);
    cy.contains(`button`, `Send Message`).should(`be.visible`);
  });

  it(`should validate form inputs`, () => {
    // submit without filling the form
    cy.contains(`button`, `Send Message`).click();
    cy.get(`[data-test="contact-email-input-mobile"]`).should(
      `have.attr`,
      `required`
    );
    cy.get(`[data-test="contact-message-input-mobile"]`).should(
      `have.attr`,
      `required`
    );

    // Fill message only
    cy.get(`[data-test="contact-message-input-mobile"]`).type(` hi hi hi`);
    cy.contains(`button`, `Send Message`).click();
    cy.get(`[data-test="contact-email-input-mobile"]`).should(
      `have.attr`,
      `required`
    );

    // Fill email only
    cy.get(`[data-test="contact-message-input-mobile"]`).clear();
    cy.get(`[data-test="contact-email-input-mobile"]`).type(`example@test.com`);
    cy.contains(`button`, `Send Message`).click();
    cy.get(`[data-test="contact-message-input-mobile"]`).should(
      `have.attr`,
      `required`
    );
  });

  it(`should copy email to clipboard when email icon is clicked`, () => {
    cy.window().then((win) => {
      cy.spy(win.navigator.clipboard, `writeText`).as(`copyText`);
    });

    // First find and click the email button
    cy.get(`[data-test="contact-email-copy-button-mobile"]`).click();
    // Then verify the clipboard function was called with the correct email
    cy.get(`@copyText`).should(`be.calledWith`, `alpranjal28@gmail.com`);
    // Check that the notification appears
    cy.contains(`Email copied to clipboard!`).should(`be.visible`);
  });
});
