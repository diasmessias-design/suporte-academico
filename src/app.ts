

import { Estudante } from "./models/Estudante.js";
import { Turma } from "./models/Turma.js";
import { Chamado } from "./models/Chamado.js";
import { FilaAtendimento } from "./models/FilaAtendimento.js";

// 1. Criando os estudantes
const estudante1 = new Estudante(
    "2026001",
    "João",
    "Análise e Desenvolvimento de Sistemas"
);

const estudante2 = new Estudante(
    "2026002",
    "Maria",
    "Redes de Computadores"
);

// 2. Criando a turma e matriculando estudantes
const turma1 = new Turma(
    "POO01",
    "Programação Orientada a Objetos"
);

console.log("Turma criada:", turma1);

turma1.matricular(estudante1);
turma1.matricular(estudante2);

console.log("Estudantes matriculados com sucesso!");
console.log("Matriculados:", turma1.listarMatriculados());

// 3. Adicionando notas
estudante1.adicionarNota(8);
estudante1.adicionarNota(9);
estudante1.adicionarNota(7);

console.log("Estudante:", estudante1.nome);
console.log("Matrícula:", estudante1.matricula);
console.log("Notas:", estudante1.listarNotas());
console.log("Média:", estudante1.calcularMedia());

// 4. Criando chamados
const chamado1 = new Chamado(
    1,
    "Problema com matrícula",
    estudante1
);

const chamado2 = new Chamado(
    2,
    "Dúvida sobre notas",
    estudante2
);

const chamado3 = new Chamado(
    3,
    "Solicitação de documento",
    estudante1
);

// 5. Criando a fila de atendimento
const fila = new FilaAtendimento();

fila.adicionar(chamado1);
fila.adicionar(chamado2);
fila.adicionar(chamado3);

console.log("Tamanho da fila:", fila.tamanho());
console.log("Fila atual:", fila.resumo());

// 6. Retirando o primeiro chamado da fila
const primeiroChamado: Chamado | null = fila.proximo();

// Verificando se existe um chamado antes de utilizá-lo
if (primeiroChamado !== null) {
    console.log("Próximo chamado:", primeiroChamado.resumo());

    // 7. Iniciando o atendimento
    primeiroChamado.iniciarAtendimento("Professor Carlos");

    console.log(
        "Atendimento iniciado:",
        primeiroChamado.resumo()
    );

    // 8. Finalizando o atendimento
    primeiroChamado.finalizar();

    console.log(
        "Chamado finalizado:",
        primeiroChamado.resumo()
    );
} else {
    console.log("Não existem chamados na fila.");
}

// 9. Exibindo a fila restante
console.log("Tamanho após atendimento:", fila.tamanho());
console.log("Fila restante:", fila.resumo());
