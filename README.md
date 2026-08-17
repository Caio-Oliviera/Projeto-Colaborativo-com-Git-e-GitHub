# Projeto-Colaborativo-com-Git-e-GitHub
# Sistema de Gerenciamento de Eventos Acadêmicos

## 📋 Descrição

Aplicação web desenvolvida como atividade prática da disciplina, com o objetivo de simular o fluxo de trabalho colaborativo utilizado por equipes profissionais de desenvolvimento de software, utilizando **Git** e **GitHub** como ferramentas de controle de versão e colaboração.

O sistema permite o cadastro e a consulta de eventos acadêmicos, armazenando informações como:

- Nome do evento
- Descrição
- Data
- Horário
- Local
- Responsável
- Quantidade de vagas

## 👥 Integrantes e Responsabilidades

| Integrante | Papel | Responsabilidade |
|---|---|---|
| Caio Correia | Líder / Administrador do repositório | Criação e organização do repositório, gestão de colaboradores, branches e Pull Requests |
| Caio Correia | Desenvolvedor(a) da funcionalidade de cadastro | Desenvolvimento da tela/funcionalidade de cadastro de eventos |
| Filipe Monteiro | Desenvolvedor(a) da consulta | Desenvolvimento da funcionalidade de listagem/consulta de eventos |
| Diego Santos | Desenvolvedor(a) da interface | Desenvolvimento e melhoria da interface do sistema |
| Luiz Guilherme Almeida | Documentação e testes | Criação do README, documentação do projeto e testes das funcionalidades |

## 🛠️ Tecnologias Utilizadas

- HTML
- CSS
- Git
- GitHub
- Visual Studio Code

## ⚙️ Funcionalidades

- [x] Cadastro de eventos
- [x] Consulta/listagem de eventos
- [x] Interface para interação do usuário

## 🚀 Instruções para Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone URL_DO_REPOSITORIO
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd projeto-eventos
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie a aplicação:
   ```bash
   npm start
   ```
5. Acesse no navegador o endereço indicado no terminal (ex: `http://localhost:3000`).

## 🌿 Fluxo de Trabalho (Git/GitHub)

O desenvolvimento seguiu o seguinte fluxo colaborativo:

1. Cada integrante desenvolveu sua funcionalidade em uma **branch própria**, criada a partir da `main`.
2. Commits frequentes e organizados foram realizados durante o desenvolvimento.
3. Antes da integração, cada branch foi atualizada com a `main` para evitar conflitos.
4. Ao finalizar, cada integrante abriu um **Pull Request**, descrevendo a funcionalidade implementada e os testes realizados.
5. Cada Pull Request passou por **Code Review** de outro integrante da equipe.
6. Após aprovação, o líder realizou o **merge** da branch na `main`.

## 🌳 Branches do Projeto

- `main` — versão principal e estável do projeto
- `feature/cadastro-eventos` — funcionalidade de cadastro
- `feature/listagem-eventos` — funcionalidade de consulta
- `feature/interface` — interface do sistema
- `docs/documentacao` — documentação do projeto

## 📁 Estrutura do Repositório

```
projeto-eventos/
├── README.md
├── .gitignore
└── src/
```
