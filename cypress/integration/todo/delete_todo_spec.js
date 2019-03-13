describe('Delete Todo ', function () {
    it('visit the add todo screen', function () {
     //   cy.visit('http://localhost:3000/addtodo')
     cy.visit('/') 
     cy.get('.add-todo-btn')
     .click() 
     cy.get('#name')
       .type('adding todo using cypress')
       .should('have.value','adding todo using cypress')
       cy.get('#order')
       .type('321')
       .should('have.value','321')
       cy.get('.signup-form-button')
       .click()   
    })
})