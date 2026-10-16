import { VinculoNaTurma } from "./VinculoNaTurma.js";

export class Turma {
    #vinculos = [];

    constructor(codigo, componenteCurricular) {
    if (typeof codigo !== "string" || !codigo.trim()) {
        throw new Error("Código da turma inválido.");
    }

    if (typeof componenteCurricular !== "string" ||
        !componenteCurricular.trim()) {
        throw new Error("Componente curricular inválido.");
    }

    this.codigo = codigo;
    this.componenteCurricular = componenteCurricular;
}
    matricular(estudante) {
    const jaMatriculado = this.#vinculos.some(
        vinculo => vinculo.estudante.matricula === estudante.matricula
    );

    if (jaMatriculado) {
        throw new Error("Estudante já matriculado nesta turma.");
    }

    const novoVinculo = new VinculoNaTurma(
        estudante,
        new Date().toISOString().slice(0, 10),
        0
    );

    this.#vinculos.push(novoVinculo);
}
listarMatriculados() {
    return this.#vinculos.map(vinculo => ({
        matricula: vinculo.estudante.matricula,
        nome: vinculo.estudante.nome,
        dataEntrada: vinculo.dataEntrada,
        frequencia: vinculo.frequencia
    }));
}
}