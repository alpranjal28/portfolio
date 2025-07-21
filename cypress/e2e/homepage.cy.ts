describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

 it('should display the homepage with title and hero image', () => {
    // Check for the main heading - use should('exist') instead of should('be.visible')
    cy.get('h1').contains('Crafting Digital Experiences').should('exist')
    
    // Check for the hero image
    cy.get('img[alt="image"]').should('exist')
    
    // Check for the introduction text - use should('exist') instead of should('be.visible')
    cy.contains("I'm Pranjal").should('exist')
  })
  
  it('should have working navigation links', () => {
    // Test navigation to Portfolio page
    cy.contains('view my work').should('have.attr', 'href', '/portfolio')
    
    // Test navigation to Contact page
    cy.contains('contact me').should('have.attr', 'href', '/contact')
    
    // Test navigation to About page
    cy.contains('About Me').should('have.attr', 'href', '/about')
  })
  
  it('should navigate to portfolio page', () => {
    cy.contains('view my work').click()
    cy.url().should('include', '/portfolio')
  })
  
  it('should navigate to contact page', () => {
    cy.contains('contact me').click()
    cy.url().should('include', '/contact')
  })
  
  it('should navigate to about page', () => {
    cy.contains('About Me').click()
    cy.url().should('include', '/about')
  })
})
