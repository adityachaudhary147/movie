it('visits the app', () => {
    cy.visit('http://localhost:3000')
})


  it('entering input', () => {
      cy.get('.input').clear();
    const input = "Tim ferris"
    cy.get('.input').type(input).should('have.value', input);
  })

  it('click on search button',()=>{
      cy.get('.search-bar').find('button').click();
  })