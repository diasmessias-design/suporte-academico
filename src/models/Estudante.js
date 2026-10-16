
export class Estudante {
    #matricula;
    #notas = [];

    constructor(matricula, nome, curso) {
    if (typeof matricula !== "string" || !matricula.trim()) {
        throw new Error("Matrícula inválida.");
    }

    if (typeof nome !== "string" || !nome.trim()) {
        throw new Error("Nome inválido.");
    }

    if (typeof curso !== "string" || !curso.trim()) {
        throw new Error("Curso inválido.");
    }

    this.#matricula = matricula;
    this.nome = nome;
    this.curso = curso;
}

    get matricula() {
        return this.#matricula;
    }

    adicionarNota(nota) {
        if (typeof nota !== "number" ||
            !Number.isFinite(nota) ||
            nota < 0 ||
            nota > 10) {
            throw new Error("A nota deve estar entre 0 e 10.");
        }

        this.#notas.push(nota);
    }

    listarNotas() {
        return [...this.#notas];
    }

    calcularMedia() {
        if (this.#notas.length === 0) {
            return 0;
        }

        let soma = 0;

        for (const nota of this.#notas) {
            soma += nota;
        }

        return soma / this.#notas.length;
    }
}
  