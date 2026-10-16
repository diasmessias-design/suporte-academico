
import { Estudante } from "./models/Estudante.js";
import { Turma } from "./models/Turma.js";
import { Chamado } from "./models/Chamado.js";
import { FilaAtendimento } from "./models/FilaAtendimento.js";

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

const turma1 = new Turma(
    "POO01",
    "Programação Orientada a Objetos"
);

console.log("Turma criada:", turma1);
turma1.matricular(estudante1);
turma1.matricular(estudante2);

console.log("Estudante matriculado com sucesso!");

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

const fila = new FilaAtendimento();

fila.adicionar(chamado2);
fila.adicionar(chamado3);

console.log("Tamanho da fila:", fila.tamanho());
console.log("Fila atual:", fila.resumo());

const primeiroChamado = fila.proximo();

console.log("Próximo chamado:", primeiroChamado.resumo());
console.log("Tamanho após atendimento:", fila.tamanho());
console.log("Fila restante:", fila.resumo());


console.log("Chamado criado:", chamado1.resumo());

chamado1.iniciarAtendimento("Professor Carlos");
console.log("Atendimento iniciado:", chamado1.resumo());

chamado1.finalizar();
console.log("Chamado finalizado:", chamado1.resumo());


estudante1.adicionarNota(8);
estudante1.adicionarNota(9);
estudante1.adicionarNota(7);


console.log(estudante1);
console.log("Notas do estudante:", estudante1.listarNotas());
console.log("Média do estudante:", estudante1.calcularMedia());
console.log("Matrícula:", estudante1.matricula);
console.log("Matriculados:", turma1.listarMatriculados());

