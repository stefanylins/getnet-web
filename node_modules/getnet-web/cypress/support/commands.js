// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('acessarSite', ()=>{

    cy.visit('/')
    cy.title().should('eq', 'Getnet | Máquinas de cartão e soluções financeiras para o seu negócio')
  
  })
  Cypress.Commands.add('excecoesDaAplicacao', ()=>{

    cy.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      }) 
  
  })
  Cypress.Commands.add('menuSouCliente', ()=>{

    cy.get('#gnt-burger').click()
        cy.get('#menu-header-login > :nth-child(1) > .gnt-nav-button').click()
  
  })

Cypress.Commands.add('digitarValor', ()=>{

    cy.get('#faq-search-input').type('Cartão Getnet')

})
Cypress.Commands.add('opcaoAtivarCartao', ()=>{

    cy.get('[href="https://site.getnet.com.br/duvidas/cartao-getnet/?modal_open=12807"] > .c-search-dropdown-link__item > .c-search-dropdown-link__title').click()

})
Cypress.Commands.add('mensagemModal', ()=>{

    cy.get('.is-modal-open > .o-modal__content > .o-modal__title')
          .should('be.visible')
          .should('have.text', 'Como ativar/desbloquear o meu cartão Getnet?')

})
Cypress.Commands.add('fecharModal', ()=>{

    cy.get('.is-modal-open > .o-modal__content > .o-modal__close').click()

})
Cypress.Commands.add('retornarHomepage', ()=>{

    cy.get('.gnt-brand').click()

})
Cypress.Commands.add('opcaoCentralDeAjuda', ()=>{

    cy.get('.active > .gnt-nav-menu-depth2 > :nth-child(1) > .gnt-nav-menu > :nth-child(5) > #menu-ajuda-sou-cliente-central-ajuda').click()

})




  