it('visits the app', () => {
    cy.visit('http://localhost:3000')
})


it('entering input', () => {
    const input = "Breaking Bad"
    cy.get('.input').type(input).should('have.value', input);
  })

  it('click on search button',()=>{
      cy.get('.search-bar').find('button').click();
  })
  it('wait',()=>{
      cy.wait(10000);
  })
