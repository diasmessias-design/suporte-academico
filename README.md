# Sistema de Suporte Acadêmico — Migração para TypeScript

## Descrição

Projeto desenvolvido inicialmente em JavaScript com Node.js, utilizando Programação Orientada a Objetos (POO) e módulos ECMAScript (ESM).

Nesta etapa, o sistema foi migrado para **TypeScript**, com o objetivo de adicionar tipagem estática, melhorar a segurança do código e identificar possíveis defeitos antes da execução.

O sistema simula operações de suporte acadêmico, incluindo cadastro de estudantes, gerenciamento de turmas, matrículas, cálculo de médias, chamados e fila de atendimento.

## Tecnologias utilizadas

- TypeScript
- JavaScript
- Node.js
- Módulos ECMAScript (ESM)
- npm

## Configuração do TypeScript

O projeto utiliza um arquivo `tsconfig.json` com as seguintes configurações principais:

- `target: ES2020` — define a versão do JavaScript gerado.
- `module: NodeNext` — configura os módulos para o ambiente Node.js.
- `moduleResolution: NodeNext` — configura a resolução de módulos.
- `strict: true` — ativa as verificações rigorosas de tipos.
- `noImplicitAny: true` — impede tipos `any` implícitos.
- `strictNullChecks: true` — exige tratamento explícito de valores `null` e `undefined`.
- `rootDir: ./src` — define a pasta do código-fonte.
- `outDir: ./dist` — define a pasta dos arquivos compilados.

## Classes implementadas

### Estudante

Representa um estudante com matrícula, nome e curso.

Permite adicionar notas válidas, calcular a média e consultar as notas de forma segura.

Utiliza campos privados, tipos explícitos e propriedades de somente leitura para proteger informações do estudante.

### Turma

Representa uma turma acadêmica.

Permite matricular estudantes, impedir matrículas duplicadas e consultar os matriculados.

Utiliza um array tipado de objetos `VinculoNaTurma`.

### VinculoNaTurma

Representa a matrícula de um estudante em uma turma, armazenando a data de entrada e a frequência.

Utiliza tipos explícitos e validações para garantir que a frequência esteja entre 0 e 100.

### Chamado

Representa uma solicitação de suporte acadêmico associada a um estudante.

Possui três estados:

- `ABERTO`
- `EM_ATENDIMENTO`
- `FINALIZADO`

O tipo `StatusChamado` utiliza uma união de literais para restringir os estados permitidos.

As mudanças de estado também são verificadas durante a execução, impedindo transições inválidas.

### FilaAtendimento

Organiza os chamados utilizando a estrutura FIFO (*First In, First Out*), em que o primeiro chamado adicionado é o primeiro a ser retirado.

Utiliza um array tipado `Chamado[]`.

O método `proximo()` retorna `Chamado | null`, indicando que a fila pode estar vazia.

## Serviços tipados

O projeto também possui serviços responsáveis por operações de cadastro, consulta, gerenciamento de chamados e validação de dados.

### Serviço de estudantes

Contém funções com parâmetros e retornos tipados, incluindo operações de consulta e cálculo de médias.

### Serviço de chamados

Utiliza o tipo `StatusChamado` para controlar os estados permitidos e impedir transições inválidas.

### Validação de entrada externa

Utiliza o tipo `unknown` para representar informações recebidas de fontes externas.

A função `validarEstudante` verifica os dados antes de utilizá-los, incluindo a presença e o formato do nome e da matrícula.

A validação retorna informações sobre o resultado, incluindo um indicador booleano e uma lista de erros.

## Conceitos de TypeScript aplicados

O projeto demonstra:

- Tipagem estática de variáveis, propriedades, parâmetros e retornos.
- Criação de tipos com `type` e `interface`.
- Arrays tipados, como `number[]` e `Chamado[]`.
- União de tipos, como `Chamado | null`.
- Uso de `readonly` para representar imutabilidade.
- Uso de `unknown` e estreitamento de tipos com `typeof`.
- Verificação de valores nulos com `strictNullChecks`.
- Prevenção de tipos implícitos com `noImplicitAny`.

## Conceitos de orientação a objetos

O projeto preserva os conceitos de classes, construtores, métodos de instância, campos públicos e privados, encapsulamento, associação e composição.

A associação é representada pela relação entre `Chamado` e `Estudante`.

A composição é representada pela classe `Turma`, responsável por criar e controlar seus objetos `VinculoNaTurma`.

## Como instalar e executar

É necessário possuir o Node.js e o npm instalados.

### 1. Instalar as dependências

Na pasta principal do projeto, execute:

```bash
npm install
```

No PowerShell, se necessário:

```powershell
npm.cmd install
```

### 2. Verificar os tipos

```bash
npx tsc --noEmit
```

No PowerShell:

```powershell
npx.cmd tsc --noEmit
```

Esse comando verifica os tipos sem gerar arquivos JavaScript.

### 3. Compilar o projeto

```bash
npx tsc
```

No PowerShell:

```powershell
npx.cmd tsc
```

Os arquivos JavaScript gerados são armazenados na pasta `dist/`.

### 4. Executar a aplicação

```bash
node dist/app.js
```

A aplicação demonstra o cadastro de estudantes, as matrículas, o cálculo de médias e o processamento de chamados.

## Testes realizados

Foram executados testes para verificar:

- Validação de dados de estudantes.
- Rejeição de nomes e matrículas inválidos.
- Cálculo de média com notas válidas.
- Cálculo de média para estudante sem notas.
- Transições válidas e inválidas de status dos chamados.
- Compilação sem erros de tipos.
- Execução da aplicação completa após a migração.

A verificação estática foi realizada com:

```bash
npx tsc --noEmit
```

A aplicação também foi compilada e executada com sucesso no Node.js.

## Organização do projeto

```text
suporte-academico/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── src/
    ├── app.ts
    ├── tipos.ts
    ├── teste-chamados.ts
    ├── teste-media.ts
    ├── teste-validacao.ts
    ├── config/
    ├── models/
    │   ├── Estudante.ts
    │   ├── Turma.ts
    │   ├── VinculoNaTurma.ts
    │   ├── Chamado.ts
    │   └── FilaAtendimento.ts
    └── services/
        ├── estudantes.ts
        ├── chamados.ts
        └── validacao.ts
```

As pastas `node_modules/` e `dist/` são ignoradas pelo Git.

## Conclusão

A migração do sistema acadêmico para TypeScript permitiu adicionar contratos de tipos às classes e funções, melhorar o tratamento de valores nulos e validar informações externas de maneira mais segura.

Durante o desenvolvimento, o compilador identificou problemas como parâmetros sem tipos explícitos, importações incorretas e possíveis acessos a valores nulos.

Esses problemas puderam ser corrigidos antes da execução da aplicação, demonstrando como a verificação estática de tipos contribui para a prevenção de defeitos.

A aplicação manteve suas funcionalidades principais após a migração, preservando os conceitos de orientação a objetos implementados na versão original em JavaScript.