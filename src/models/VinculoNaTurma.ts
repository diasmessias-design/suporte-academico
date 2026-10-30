




import { Estudante } from "./Estudante.js";

export class VinculoNaTurma {
    readonly #estudante: Estudante;
    readonly #dataEntrada: string;
    #frequencia: number;

    constructor(
        estudante: Estudante,
        dataEntrada: string,
        frequencia: number = 0
    ) {
        if (!(estudante instanceof Estudante)) {
            throw new Error("O vínculo exige um estudante válido.");
        }

        if (
            !/^\d{4}-\d{2}-\d{2}$/.test(dataEntrada) ||
            !Number.isFinite(Date.parse(dataEntrada)) ||
            new Date(dataEntrada).toISOString().slice(0, 10) !== dataEntrada
        ) {
            throw new Error(
                "Informe uma data válida no formato AAAA-MM-DD."
            );
        }

        this.#estudante = estudante;
        this.#dataEntrada = dataEntrada;
        this.#frequencia = 0;

        this.atualizarFrequencia(frequencia);
    }

    get estudante(): Estudante {
        return this.#estudante;
    }

    get dataEntrada(): string {
        return this.#dataEntrada;
    }

    get frequencia(): number {
        return this.#frequencia;
    }

    atualizarFrequencia(valor: number): void {
        if (
            !Number.isFinite(valor) ||
            valor < 0 ||
            valor > 100
        ) {
            throw new Error("A frequência deve estar entre 0 e 100.");
        }

        this.#frequencia = valor;
    }
}
