describe('App', () => {
    it('loads the home page', () => {
        cy.visit('/')
        cy.contains('Playmaker').should('exist')
    })
})
