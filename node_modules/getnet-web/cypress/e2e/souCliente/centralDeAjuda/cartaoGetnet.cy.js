
describe('Cartão Getnet', () => {
  
      it('Obter informações para ativar o Cartão Getnet', () => {

        //Abrir a página principal do site
        cy.acessarSite()

        //Clicar no botão 'Sou Cliente'
        cy.menuSouCliente()

        //Desativar exceções não capturadas da aplicação
        cy.excecoesDaAplicacao()

        //Selecionar a opção 'Central de Ajuda'
        cy.opcaoCentralDeAjuda()

        //Digitar o valor de pesquisa 'Cartão Getnet'
        cy.digitarValor()

        //Clicar na opção de ativar o Cartão
        cy.opcaoAtivarCartao()

        //Validar a mensagem da modal
        cy.mensagemModal()

        //Fechar a modal
        cy.fecharModal()

        //Retornar a página principal do site
        cy.retornarHomepage()


  })
})

