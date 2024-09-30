
# Automação Web - Getnet

Esse projeto foi realizado como parte do processo seletivo para a empresa CWI Software.

> Passos:

1 - Acessar o site: https://site.getnet.com.br/

2 - No menu "Sou Cliente", clicar em "Central de Ajuda"

3 - Na tela clicar em "Como ativar/desbloquear o meu cartão Getnet?"

4 – Verificar se a modal foi aberta com a mensagem de texto explicativo do menu.

> Informações solicitadas

Preferencialmente desenvolver com linguagem Java, com Selenium, Cucumber.

Além da automação dos passos descritos acima, serão avaliados itens como design das classes, organização, manutenibilidade do código, orientação a objeto, arquitetura da automação, clean code, seletores utilizados 
para identificar os elementos web (xpath, css, id) e etc.

> Importante

A estrutura da automação foi realizada utilizando o framework Cypress com Javascript, devido a familiaridade na ferramenta e curto prazo para desenvolver com a stack principal desejada.



## Tecnologias utilizadas

- Cypress
- Node.js
- Javascript



## Instalação

Crie uma pasta pelo terminal para o projeto

```bash
  cd /c/mkdir getnet-web
```
Acesse a pasta `getnet-web` pelo comando
```bash
  cd getnet-web
```     
Criar o arquivo de dependências `package.json` para projeto `node.js`
```bash
  yarn init
```  
Instalar o `cypress` como dependência de desenvolvimento
```bash
  yarn add cypress -D
```   
Abrir a pasta do projeto no `VS Code`
```bash
  code .
  ``` 
## Rodando os testes

Para rodar os testes de interface, execute o seguinte comando

```bash
  yarn cypress open
```
Para rodar os testes pela CLI, execute o seguinte comando

```bash
  yarn cypress run
```


## Relatórios de testes

Após executar os testes, os prints com as evidências de falha estão gravadas no diretório `cypress/screenshots`. A gravação do teste de sucesso completo está no diretório `cypress/videos`


## Considerações Finais

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?


