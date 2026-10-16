
import { Estudante } from "./Estudante.js";

export class VinculoNaTurma {
    #estudante;
    #dataEntrada;
    #frequencia;

    constructor(estudante, dataEntrada, frequencia = 0) {
        if (!(estudante instanceof Estudante)) {
            throw new Error("O vínculo exige um estudante válido.");
        }

        if (typeof dataEntrada !== "string" ||
            !/^\d{4}-\d{2}-\d{2}$/.test(dataEntrada) ||
            !Number.isFinite(Date.parse(dataEntrada)) ||
            new Date(dataEntrada).toISOString().slice(0, 10) !== dataEntrada) {
            throw new Error("Informe uma data válida no formato AAAA-MM-DD.");
        }

        this.#estudante = estudante;
        this.#dataEntrada = dataEntrada;
        this.atualizarFrequencia(frequencia);
    }

    get estudante() {
        return this.#estudante;
    }

    get dataEntrada() {
        return this.#dataEntrada;
    }

    get frequencia() {
        return this.#frequencia;
    }

    atualizarFrequencia(valor) {
        if (typeof valor !== "number" ||
            !Number.isFinite(valor) ||
            valor < 0 ||
            valor > 100) {
            throw new Error("A frequência deve estar entre 0 e 100.");
        }

        this.#frequencia = valor;
    }
}
