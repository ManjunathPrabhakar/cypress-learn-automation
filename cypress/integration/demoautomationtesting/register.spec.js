describe('Demo Automation Testing', () => {
    it('Register Page', () => {
        cy.request('http://demo.automationtesting.in/')
        cy.visit('http://demo.automationtesting.in/')
    })
})