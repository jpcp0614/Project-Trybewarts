# Trybewarts

## Autor
- [João Paulo Pereira](https://github.com/jpcp0614)

## Sumário

- [Habilidades](#habilidades)
- [Desenvolvimento](#desenvolvimento)
- [Testes](#testes)
  - [Linter](#linter)
  - [Cypress](#cypress)
- [Instruções para Rodar](#instuções-para-rodar)

---

## Habilidades

- Criar formulários em HTML
- Utilizar CSS Flexbox para criar layouts flexíveis;
---

## Desenvolvimento

- Formulário: `javascript`, `css` e `html`.

---

![trybewarts](./trybewarts.png)

---
## Testes:

### Linter

Utilizei neste projeto os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```
---

### Cypress

Para rodar o cypress localmente e verificar se seus requisitos estão passando:

```bash
npm test
```

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```
---
## Instruções para rodar:

1. Faça o clone do projeto e entre no diretório do projeto:
	```bash
	git clone git@github.com:jpcp0614/Project-Trybewarts.git && cd Project-Trybewarts
	```

2. Instale as dependências do projeto:
	```bash
	npm install
	```

3. Rode o comando abaixo para ver o projeto no seu navegador:
	```bash
	xdg-open index.html
	```
	ou utilize o 'Go Live' do Vs Code
---
