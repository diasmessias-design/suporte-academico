# Sistema de Suporte Acadêmico

## Descrição

Projeto desenvolvido em JavaScript com Node.js, utilizando Programação Orientada a Objetos (POO) e módulos ECMAScript (ESM).

O sistema simula operações de suporte acadêmico, incluindo cadastro de estudantes, gerenciamento de turmas, matrículas, chamados e fila de atendimento.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Módulos ECMAScript (ESM)

## Classes implementadas

### Estudante
Representa um estudante com matrícula, nome e curso. Permite adicionar notas válidas, calcular a média e consultar as notas de forma segura.

### Turma
Representa uma turma acadêmica. Permite matricular estudantes, impedir matrículas duplicadas e consultar os matriculados.

### VinculoNaTurma
Representa a matrícula de um estudante em uma turma, armazenando a data de entrada e a frequência.

### Chamado
Representa uma solicitação de suporte acadêmico associada a um estudante.

Possui três estados:

- ABERTO
- EM_ATENDIMENTO
- FINALIZADO

As mudanças de estado são controladas por métodos.

### FilaAtendimento
Organiza os chamados utilizando a estrutura FIFO (First In, First Out), em que o primeiro chamado adicionado é o primeiro a ser retirado.

## Conceitos de orientação a objetos

O projeto utiliza classes, construtores, métodos de instância, campos públicos e privados, encapsulamento, associação e composição.

A associação é representada pela relação entre Chamado e Estudante.

A composição é representada pela classe Turma, responsável por criar e controlar seus objetos VinculoNaTurma.

## Como executar

É necessário possuir o Node.js instalado.

1. Abra a pasta do projeto no VS Code.
2. Abra o terminal na pasta principal.
3. Execute:

```bash
npm start
```

No PowerShell, caso a execução de scripts esteja bloqueada, utilize:

```bash
npm.cmd start
```

O programa executará o arquivo `src/app.js`, demonstrando as funcionalidades implementadas.

## Organização

```text
suporte-academico/
├── package.json
├── README.md
└── src/
    ├── app.js
    ├── config/
    └── models/
        ├── Estudante.js
        ├── Turma.js
        ├── VinculoNaTurma.js
        ├── Chamado.js
        └── FilaAtendimento.js
```
