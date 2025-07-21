// cypress/e2e/contact-form-submission.cy.ts
describe('Contact Form Submission', () => {
  beforeEach(() => {
    // Visit the contact page
    cy.visit('http://localhost:3000/contact')
    
    // Intercept the emailjs API call
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', {
      statusCode: 200,
      body: { text: 'Success' }
    }).as('emailSubmission')
  })

  it('should submit the form successfully', () => {
    // Fill out the form
    cy.get(`[data-test="contact-email-input-mobile"]`).type('test@example.com')
    cy.get(`[data-test="contact-message-input-mobile"]`).type('This is a test message')
    
    // Submit the form
    cy.contains('button', 'Send Message').click()
    
    // Wait for the API call
    cy.wait('@emailSubmission')
    
    // Check for success message
    cy.contains('Message sent successfully').should('be.visible')
  })

  it('should handle submission error', () => {
    // Override the intercept to simulate an error
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', {
      statusCode: 500,
      body: { error: 'Failed to send email' }
    }).as('emailSubmissionError')
    
    // Fill out the form
    cy.get(`[data-test="contact-email-input-mobile"]`).type('test@example.com')
    cy.get(`[data-test="contact-message-input-mobile"]`).type('This is a test message')
    
    // Submit the form
    cy.contains('button', 'Send Message').click()
    
    // Wait for the API call
    cy.wait('@emailSubmissionError')
    
    // Check for error message
    cy.contains('Something went wrong').should('be.visible')
  })
})
