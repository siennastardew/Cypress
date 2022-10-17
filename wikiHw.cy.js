describe('wikipedia test - Arnold Schwarzenegger', () => {
  it('Loads the main wiki page', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')
  })
  it('Clicks the search bar, types Schwarzenegger, submits search', () => {
    cy.get('form').click()
      .type('Schwarzenegger')
      .submit()
  })
  it('Verifies search result - page is about A. Schwarzenegger', () => {
    cy.contains('Arnold Schwarzenegger')
  })
  it('Verifies that page contains chapter about A. Schwarzenegger life', () => {
    cy.contains('Personal life')
  })
})